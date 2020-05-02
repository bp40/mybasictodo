
//double click to mark done
$("ul").on("dblclick", "li",function(){
    
    $(this).toggleClass("done");
    
});

//deletes task
$("ul").on("click", "span.delete", function(event){
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
   
    if(event.which === 13) { //enter key ==13
        var task = $(this).val(); //read input
        $(this).val("");  
        $("ul").append("<li class='item'><span class='delete'><i class=\"fas fa-backspace\"></i></span>" + task + "<span class='edit'><i class=\"far fa-edit\"></i></span></li>");
    }
    
});


