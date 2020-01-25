//check off specific todos by clicking

$("ul").on("click", "li", function(){       //event occurs only when a page is loaded. In order to work on new li's 
                                            //we have selected 'ul' instead of 'li' and then we are adding event listener of 'li'
                                            //we have used 'on' instead of 'click' because works only on the elements which are loaded when page loads so to work on newly added elements 'on' method is used
                        
    //Method 1
    $(this).toggleClass("completed");

    //      OR

    //Method 2
    //check if text is gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     //turn it to black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     }); 
    // }else{
    //     //else turn it to gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();  //parent method referes to parent of span tag which is li in this case. removes the li
    });

    event.stopPropagation();    //This will stop the click event on li immediately after span event 
});

//Add new Todo
$("input[type='text']").keypress(function(event){   //event occurs when a key is pressed
    if(event.which === 13){      //  'which' gives the code of the key pressed. 13 is the keycode for 'enter' key 
        var todoText = $(this).val();   //grabbs input text
        $(this).val("");    //resets the input text
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");    //adds new li with the text entered in input field
    }
    
});

//toggle input field with plus button
$("button").click(function() {
    
    $("input[type='text']").fadeToggle();

});