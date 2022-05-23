

$(document).ready(function(){
    $(".chat_on").click(function(){
        $(".Layout").toggle();
    });
    
       $(".chat_close_icon").click(function(){
        $(".Layout").hide();
           $(".chat_on").toggle(300);
    });

    $("").click(function(){
        $(".Layout").hide();
           $(".chat_on").show(300);
    });
      
    
});
