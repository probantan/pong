//user interfac
$(document).ready(function(){
    $('form#cup').submit(function(event) {
      event.preventDefault();
     
      var input=parseInt($('input#btn').val());
      var output=pingpong(input);
console.log("pop");
//Logic business
      
    })
})

var pingpong=function(input){
    for(x=1; x<=input; x++){
        if(x%15===0){
            var li="<li>"+"pingpong"+"</li>";
        }else if (x%3===0) {
            var li="<li>"+"ping"+"</li>";
        }else if(x%5===0) {
            var li="<li>"+"pong"+"</li>";

        }else {
            var li="<li>"+x+"</li>";
        }
$("#pop").append(li);
    }
}