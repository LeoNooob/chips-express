var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    name: String,
    pwd: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

UsersSchema.pre('save', (next) => {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next();
})

//查询的静态方法
UsersSchema.statics = {
    fetch: function(cb) { //查询所有数据
        return this
          .find()
          .sort('meta.updateAt') //排序
          .exec(cb) //回调
    },
    findById: function(id, cb) { //根据id查询单条数据
        return this
          .findOne({_id: id})
          .exec(cb)
    }
}

//暴露出去的方法
module.exports = UsersSchema