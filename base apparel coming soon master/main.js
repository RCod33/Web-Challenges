let width = innerWidth;
let bool = false;

if(width < 480) {
    let newElement = document.createElement(`img`);
    $(newElement).addClass("heroMobile");
    newElement.src = "./images/hero-mobile.jpg";

    $(".imgContainer").remove();
    $(".logo").after(newElement);
}

$("form").on(`submit`, (event) => {
    event.preventDefault();

    if(!bool){
        let textAlertElement = document.createElement(`p`);
        $(textAlertElement).addClass("textAlert");
        textAlertElement.innerHTML = "Please provide a valid email";
        let iconErrorElement = document.createElement(`img`);
        $(iconErrorElement).addClass("iconError");
        iconErrorElement.src = "./images/icon-error.svg";
        
        $(".form-inline").css("border", "0.1px solid var(--softRed)");
        $(".form-inline").after(textAlertElement);
        $("#submit").after(iconErrorElement);
    }

    bool = true;

});