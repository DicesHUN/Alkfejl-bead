'use strict'
const Database = use('Database')
const Category = use('App/Model/Category')
const Todo = use('App/Model/Todo')
const Part = use('App/Model/Part')
const User = use('App/Model/User')
const Validator = use('Validator')


var http = require('http');

class AlkController {
    * create(request, response){
        const categories = yield Category.all()
        yield response.sendView('createAlk', {
            categories: categories.toJSON()
        });
    }

    * doCreate(request, response){
        const todoData = request.except('_csrf');

        const rules = {
            title:'required',
            category_id:'required'
        };
        const validation = yield Validator.validateAll(todoData, rules);

        if(validation.fails()){
            yield request
                .withAll()
                .andWith({errors: validation.messages()})
                .flash()
            response.redirect('back');
            return
        }
        console.log(todoData);
        todoData.user_id = request.currentUser.id;
        const todo = yield Todo.create(todoData);
        response.redirect('/alk');
    }

   
    * addCategory(request,response){
        const categoryData = request.except('_csrf');
        const rules = {
            name:'required'
        }
        const validation = yield Validator.validateAll(categoryData, rules);

        if(validation.fails()){
            yield request
                .withAll()
                .andWith({errors: validation.messages()})
                .flash()
            response.redirect('back');
            return
        }
        
        const category = yield Category.create(categoryData);
        response.redirect('back');
    }

    * edit(request,response){
        const categories = yield Category.query().where('user_id', request.currentUser.id).fetch()
        const id = request.param('id');
        const todo = yield Todo.find(id);
        yield todo.related('category').load();
        yield response.sendView('editAlk', {
            todo: todo.toJSON(),
            categories: categories.toJSON()
        })
    }

    * doEdit(request,response){
        const todoData = request.except('_csrf');

        const rules = {
            title:'required|min:1|',
            category_id:'required'
        };
        const validation = yield Validator.validateAll(todoData, rules);

        if(validation.fails()){
            yield request
                .withAll()
                .andWith({errors: validation.messages()})
                .flash()
            response.redirect('back');
            return
        }

        const id = request.param('id');
        const todo = yield Todo.find(id);
        todo.title = todoData.title;
        todo.category_id = todoData.category_id;
        yield todo.save();
        response.redirect('/alk');
    }

    * delete(request,response){
        const id = request.param('id');
        const todo = yield Todo.find(id);

        yield todo.delete();
        response.redirect('/alk');
    }

    * deletePart(request, response){
        const id = request.param('id');
        const part = yield Part.find(id);

        yield part.delete();
        response.redirect('/parts')
    }

    * deleteCategory(request,response){
        const id = request.param('id');
        const category = yield Category.find(id);
        const todos = yield category.alks().fetch();
        
        yield category.delete();
        response.redirect('/alk');
    }

    * editCategory(request,response){
        const categoryData = request.except('_csrf');

        const rules = {
            name:'required',
        };
        const validation = yield Validator.validateAll(categoryData, rules);

        if(validation.fails()){
            yield request
                .withAll()
                .andWith({errors: validation.messages()})
                .flash()
            response.redirect('back');
            return
        }
    

        const id = request.param('id');
        const category = yield Category.find(id);
        category.name = categoryData.name;
        console.log(category.name);
        yield category.save();
        response.redirect('/alk');
    }


    * getParts(request, response){
        const id = request.param('id');
        const category = yield Category.find(id);
        const todos = yield category.alks().fetch();
        
        category.allParts = todos.toJSON()

         yield response.sendView('part',{
            category: category.toJSON()
        })
     }

     * addPart(request, response){
        const categories = yield Category.all();
        const id = request.param('id');
        const p = yield Todo.find(id);
        console.log( p );
        p.user_id = request.currentUser.id;
        

        /*const parts = yield Part.create( {
            id: p.id,
            title: p.title,
            user_id: request.currentUser.id,
            category_id: p.category_id
        } );*/
        
        const i = 1;
        const part = new Part()

        for(let category of categories){
            const parts = yield category.parts().fetch();
           
            if(category.allParts == null){
                part.id += (p.id - 2341250)
                part.title = p.title
                part.user_id = request.currentUser.id
                part.category_id = p.category_id
                yield part.save();

                break;
            }
        }

        response.redirect('/parts');
    }


     * search(request, response){
         var q = request.input('title') || '';
         //var page = request.input('page') || 1;
         
          var parts = yield Todo.query().where(function() {
                        if(q!==''){
                            this.where('title','LIKE', '%'+q+'%')
                        }
                        else{
                            response.redirect('/alk');
                        }
                    }).with('category').fetch()
            //.paginate(page, 2)
         
         console.log(parts.toJSON());

          var c_id = parts.category_id;
          var category = Category.find(c_id);

          
         yield response.sendView('search', {
                //category: category.toJSON(),
                parts: parts.toJSON()                
         });
     }



    * ajaxDelete(request, response) {
         
         const id = request.param('id');
         const todo = yield Todo.find(id);
 
         if (todo) { 
             yield todo.delete()
             response.ok({
                 success: true
             })
             return
         }
         response.notFound('Nincs alkatrész');
   }
 
   * ajaxDeleteCategory(request, response) {
         
         const id = request.param('id');
         const category = yield Category.find(id);
 
         if (category) {
 
             yield category.delete()
             response.ok({
                success: true
             })
             return
         }
         response.notFound('Nincs alkatrész');
   }
 
   * ajaxEdit(request,response) {
         const todoData = request.except('_csrf');
         console.log(todoData);
 
         const id = request.param('id');
         const todo = yield Todo.find(id);
                 
         const rules = {
             title:'required',
             category_id:'required'
         };
         const validation = yield Validator.validateAll(todoData, rules);
 
         if(validation.fails()){
             yield request
                 .withAll()
                 .andWith({errors: validation.messages()})
                 .flash()
             response.redirect('back');
             return
         }
 
        if (todo) {
             
             todo.title = todoData.title;
             todo.category_id = todoData.category_id;
             yield todo.save();
             console.log(todo);
             response.ok({
                 success: true
             })
             return
         }
         response.notFound('Nincs alkatresz');
     }
 
   * ajaxCreate(request,response){
       const isLoggedIn = yield request.auth.check()
         if (!isLoggedIn) {
             response.redirect('/loginSignUp')
         }
         const todoData = request.except('_csrf')
         const rules={
             title:'required',
             category_id:'required',
         }
 
         const validation = yield Validator.validateAll(todoData, rules);
 
         if(validation.fails()){
             response.ok({
                 success: false   
         })
             return
         }
         todoData.user_id = request.currentUser.id;
         const todo = yield Todo.create(todoData)
         response.ok({
                 success: true   
         })
     }

     * ajaxSearch(request, response){
         var query = request.input('title');
         if(!query){
             response.ok([]);
             return;
         }
 
         var todos = yield Todo.query()
         .where(function () {
             this.where('title','LIKE', '%'+query+'%')
         }).with('category').fetch()
 
         response.ok(todos);
     }

}

module.exports = AlkController
