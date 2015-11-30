(function(){
    var testEditor = editormd("editor", {
        width           : "100%",
        height          : "70%",
        path            : "../components/editor.md/lib/",
        htmlDecode      : "style,script,iframe",
        tex             : true,
        emoji           : true,
        taskList        : true,
        flowChart       : true,
        sequenceDiagram : true,
        saveHTMLToTextarea :  true,
    });

    function sendData(option){
    }
    $('.publish-btn').on('click',function(){
        var tmp = {
            title:$('#myTitle').val(),
            tags:$('#myTag').val(),
            content:testEditor.getHTML()
        }
        $.ajax({
            url:'/publish',
            type:'POST',
            data:tmp,
            success:function(result){
                console.log(result);
            },
            error:function(e){
                console.log('ajax请求出错');
            }
        })
    })
})()
