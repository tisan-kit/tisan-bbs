(function(){
  _.templateSettings = {
    evaluate    : /<#([\s\S]+?)#>/g,
    interpolate : /<#=([\s\S]+?)#>/g,
    escape      : /<#-([\s\S]+?)#>/g
  };
  question_content.prototype.getInfo=function(id){
    if(!id) return;
    var self = this;
    $.ajax({
      url:'/question/info/'+id,
      type:'GET',
      success:function(questionContent){
        if(questionContent.code!=0){
          console.log(questionContent.msg);
        }else{
          self.showInfo(questionContent.data.questionInfo);
        }
      },error:function(err){
        console.log(err);
      }
    })
  }
  question_content.prototype.showInfo=function(data){
    if(!data)return;
    var showData={
      title:data.title,
      time:data.create_time,
      author_name:'bugall',
      view_times:1003,
      content:data.content
    }
    $('#content').append(_.template($('#question-content').html())(showData));
  }
  var question_id = $('.container').eq(0).attr('data-id'),
      questionObj = new question_content();
  function question_content(){
  }
  questionObj.getInfo(question_id);
})()
