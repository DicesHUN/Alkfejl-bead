$(function(){
     $('#search [name=title]').on('input', function(){
         $.get('/ajax/search',{
             title:$(this).val()
         }).done(function(result){
             console.log(result)
             let html='';
             for(let i=0;i<result.length;i++){
                 const todos = result[i];
                 html+='<a class="list-group-item" href="/alk/'+todos.id+'">'+todos.name+'</a>';
             }
             
 
             $('.suggestions').html(html);
 
         });
     });
 })