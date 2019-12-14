$(document).ready(function(){
    $(".saveBtn").on("click, function(){
        console.log($this);
    });
    $("#currentday").text(moment)();

});