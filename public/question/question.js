(function(){
    _.templateSettings = {
        evaluate    : /<#([\s\S]+?)#>/g,
        interpolate : /<#=([\s\S]+?)#>/g,
        escape      : /<#-([\s\S]+?)#>/g
    };
    question.prototype.getInfo=function(callback){
        var self=this;
        $.ajax({
            url:'/question/list',
            type:'GET',
            success:function(questionInfo){
                self._questionInfo=questionInfo.data
                if(0!=questionInfo.code){
                    callback(questionInfo.msg,'');
                }else{
                    callback('',questionInfo.data.questionInfo);
                }
            },error:function(err){
                callback(err,'');
            }
        })
    }
    question.prototype.showInfo=function(questionItemInfo){
        var showData = [];
        for(var i in questionItemInfo){
            showData.push({
                vote:3,
                answer:5,
                view:103,
                id:questionItemInfo[i].id,
                author:'bugall',
                time:questionItemInfo[i].create_time,
                title:questionItemInfo[i].title,
                avatar:questionItemInfo[i].avatar
            })
        }
        $('.question_content').append(_.template($('#question-list').html())({question:showData}));
    }
    var questionObj = new question();
    questionObj.getInfo(function(err,result){
        if(!!err){
            console.log(err);
        }else{
            questionObj.showInfo(result);
        }
    })
    function question(){
        this._questionInfo=[];
    }
    $('.make-question-btn').on('click',function(){
        window.location.href="/publish";
    })
})()
