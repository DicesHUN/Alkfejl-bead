'use strict'

const Lucid = use('Lucid')

class Part extends Lucid {
    category(){
        return this.belongsTo('App/Model/Category')
    }
    user(){
        return this.belongsTo('App/Model/User')
    }
}

module.exports = Part
