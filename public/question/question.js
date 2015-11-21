(function(){
    function question(){
        this._questionInfo=[];
    }
    question.prototype.getInfo=function(){
        $.ajax({
            url:'/question/info',
            type:'GET',
            success:function(questionInfo){
                this._questionInfo=questionInfo.data
            }
        })
    }
    question.prototype.showInfo=function(questionItemInfo){
        $
    }
    _.templateSettings = {
        evaluate    : /<#([\s\S]+?)#>/g,
        interpolate : /<#=([\s\S]+?)#>/g,
        escape      : /<#-([\s\S]+?)#>/g
    };
    var tmp={
        vote:3,
        answer:5,
        view:103,
        author:'bugall',
        time:'1分钟前',
        titel:'这个问题怎么解决',
        avatar:'/img/bugall.png'
    }
    var data=[];
    for(var i=0;i<=20;i++){
        data.push(tmp);
    }
    $('.question_content').append(_.template($('#question-list').html())({question:data}));
    $('.make-question-btn').on('click',function(){
        window.location.href="/publish";
    })
})()
