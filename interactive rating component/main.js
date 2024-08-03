let rateChecker = Array(6).fill(false);
let rateId = null;
let lastRate = 0;
let element = null;

rateChecker[0] = true;

function getRate(id){
    console.log("wa");
    quitMark(lastRate);
    makeMark(id);
    lastRate = id;
}

function quitMark(id){
    if(id != 0){
        element = document.getElementById(id);
        element.classList.replace(`markedButton`, `unMarkedButton`);
    }
}

function makeMark(id){
    element = document.getElementById(id);
    element.classList.replace(`unMarkedButton`, `markedButton`);
}

let submit = document.getElementById(submit);

submit.addEventListener('submit', function(event){
    window.location.href = 'thanks.html';
});