'use strict'
const Database = use('Database')
const Todo = use('App/Model/Todo')
const Part = use('App/Model/Part')
const Category = use('App/Model/Category')
const User = use('App/Model/User')
const Validator = use('Validator')

class HomeController {
    * index(request, response){
        const isLoggedIn = yield request.auth.check()
        if (!isLoggedIn) {
            response.redirect('/loginSignUp')
        }
        yield response.sendView('main');
    }

    * alk(request, response){
        const isLoggedIn = yield request.auth.check()
        if (!isLoggedIn) {
            response.redirect('/loginSignUp')
        }
        const categories = yield Category.all();

        for(let category of categories){
            const todos = yield category.alks().fetch();
            category.allTodos = todos.toJSON()
        }

        yield response.sendView('alk',{
            categories: categories.toJSON()
        })
    }

    * parts(request, response){
        const isLoggedIn = yield request.auth.check()
        if (!isLoggedIn) {
            response.redirect('/loginSignUp')
        }

        const categories = yield Category.all();

        for(let category of categories){
            const parts = yield category.parts().fetch();
            category.allParts = parts.toJSON()
        }

        yield response.sendView('parts',{
            categories: categories.toJSON()
        })
    }

    * loginSignUp(request, response){
        yield response.sendView('loginSignUp');
    }
}

module.exports = HomeController
