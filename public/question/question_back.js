_.templateSettings = {
    evaluate    : /<#([\s\S]+?)#>/g,
    interpolate : /<#=([\s\S]+?)#>/g,
    escape      : /<#-([\s\S]+?)#>/g
};
var Todo = Backbone.Model.extend({
    initialize:function(){
        console.log('This model has been initialized');
    },
    defaults:{
        name:'bugall',
        age:17
    }
})

var todo1 = new Todo();
console.log(todo1);

console.log(todo1.get('name'));

var TodoView = Backbone.View.extend({
    tagName:'li',
    className:'test',
    todoTpl:_.template("An example template"),
    events:{
        'dbclick label':'edit',
        'keypress .edit':'updateOnEnter',
        'blur .edit':'close'
    },
    render:function(){
        this.$el.html(this.todoTpl(this.model.toJSON()));
        this.input=this.$('.edit');
        return this;
    },
    edit:function(){
        console.log('edit');
    },
    close:function(){
        console.log('close');
    },
    updateOnEnter:function(e){
        console.log('update');
    }
});
var todoView = new TodoView();

var Item = Backbone.Model.extend({
    defaults: {
        part1: 'hello',
        part2: 'world'
    }
});

var Person = Backbone.Model.extend({
    defaults : { //声明属性，并指定默认值
        title: 'bugall',
        completed: 20
    }
});
var john = new Person({
    name : 'John'
});
var ItemView = Backbone.View.extend({
    el:$('#question-list'),
    initialize:function(){
        this.render();
    },
    events:{},
    render:function(){
        var template = _.template($("#question-list").html());
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
})
var b = new ItemView({model:john});
console.log(b.$el.html());
