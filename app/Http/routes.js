'use strict'

const Route = use('Route')

Route.get('/','HomeController.index')
Route.get('/alk', 'HomeController.alk')

Route.get('/parts', 'HomeController.parts')
Route.get('/alk/:id', 'AlkController.getParts')
Route.get('/addPart/:id', 'AlkController.addPart')

Route.get('/loginSignUp', 'HomeController.loginSignUp')
Route.post('login', 'RegisterOrAuthController.login')
Route.post('register', 'RegisterOrAuthController.doRegister')
Route.get('/logout', 'RegisterOrAuthController.logout')
Route.post('addCategory', 'AlkControllerr.addCategory')
Route.get('/createAlk', 'AlkController.create')
Route.post('createAlk','AlkController.doCreate')
Route.get('/editAlk/:id', 'AlkController.edit')
Route.post('editAlk/:id', 'AlkController.doEdit')
Route.post('/editCategory/:id', 'AlkController.editCategory')
Route.get('/deleteAlk/:id','AlkController.delete')
Route.get('/deletePart/:id','AlkController.deletePart')
Route.get('/deleteCategory/:id','AlkController.deleteCategory')