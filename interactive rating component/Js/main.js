document.getElementById(`rateForm`).addEventListener(`submit`, function(event){
    event.preventDefault();
    let options = document.getElementsByName(`rate`);
    let selectedOption = null;

    for(let option of options){
        if(option.checked) {
            selectedOption = option.value;
            break;
        }
    }
    
    window.location.href = `../HTML/thanks.html?valor=${selectedOption}`;

});