$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('.nav > li > a[href="'+pathname+'"]').parent().addClass('active');
})

function deleteTodo(id){
     this.event.preventDefault();
     const $todoToDelete = $('#deleteTodo'+id);
     console.log($todoToDelete);
     deleteItem($todoToDelete);
 }

 function deleteCategory(id){
     this.event.preventDefault();
     const $categoryToDelete = $('#deleteCategory' + id);
     deleteItem($categoryToDelete);
 }

 function editTodo(id) {
     const $title = $('#title');
     const $category_id = $('#category_id');
     var data = {};
     data.title = $title.val().trim();
     data.category_id = $category_id.val().trim();
     data.id = id;
     if(data.title.length > 2 && data.category_id.length > 0){
         editCreateItem(id,'editTodo','/todos', data)
     }else{
         this.event.preventDefault();
         $('.help-block').text('Title or category is empty, or you have not typed enough characters');
     }
 }

 function createTodo(){
     const $title = $('#title');
     const $category_id = $('#category_id')
     var data = {};
     data.title = $title.val().trim();
     data.category_id = $category_id.val().trim();
     if(data.title.length > 2 && data.category_id.length > 0){
         createItem('createTodo','/todos', data)
     }else{
         this.event.preventDefault();
         $('.help-block').text('Title or category is empty, or you have not typed enough characters');
     }
 }

 function createItem(item, location, data){
     this.event.preventDefault();
     const headers = {
         'csrf-token': $('[name="_csrf"]').val()
     }
     
     $.ajax({
         type: "POST",
         url: "/ajax/" + item,
         headers,
         data:data,
         success: function(data) {
             window.location.assign(location);
         },
         error: function(jqXHR, textStatus, err) {
             console.log('text status: '+textStatus+', err: '+err)
         }
     });
 }

 function editItem(id, item, location, data){
     this.event.preventDefault();
     const headers = {
         'csrf-token': $('[name="_csrf"]').val()
     }
     
     $.ajax({
         type: "POST",
         url: "/ajax/" + item + "/" + id,
         headers,
         data:data,
         success: function(data) {
             window.location.assign(location);
         },
         error: function(jqXHR, textStatus, err) {
             console.log('text status: '+textStatus+', err: '+err)
         }
     });
 }

 function ajaxDelete(url) {
   const headers = {
     'csrf-token': $('[name="_csrf"]').val()
   }
   return Promise.resolve(
     $.ajax({
       url,
       method: 'DELETE',
       dataType: 'json',
       headers
     })
   )
 }

 function confirmDelete(str){
     let _resolve, _reject;
     const $modal = $('.confirm-modal');
     $modal.modal('show');
     $modal.find('.modal-ok').on('click', function(e){
         _resolve(true);
     })
     $modal.find('.modal-cancel').on('click', function(e){
         _resolve(false);
     })
     return new Promise(function(resolve, reject){
         _resolve = resolve;
         _reject = reject;
     })
 }