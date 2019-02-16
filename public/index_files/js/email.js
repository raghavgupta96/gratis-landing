//script to take care of email submission

var emailForm = $("#emailForm");
var emailButton = $("#emailButton");

emailForm.submit(function(event){
    var userInput = $("input:first").val();
    var atSymbolLocation = userInput.search("@");

    if (atSymbolLocation != 0 && atSymbolLocation != userInput.length - 1 && userInput.search(".com") > userInput + 1){
        alert( "Thank you. \n You've been added to our mailing list." );
        return;
    }
    $("#emailSpan").text( "Enter a valid email address." ).show().fadeOut(11000);
    event.preventDefault();
});

emailButton.click(function(){
    emailForm.submit();
});
