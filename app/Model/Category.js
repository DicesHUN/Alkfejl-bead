'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
    alks(){
        return this.hasMany('App/Model/Todo')
    }
    parts(){
        return this.hasMany('App/Model/Part')
    }
}

module.exports = Category
