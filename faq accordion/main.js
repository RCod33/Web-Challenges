let questionId = null;
let answerId = null;
let fatherId = null;
let check = [false, false, false, false];
let answers = [
    `Frontend Mentor offers realistic coding challenges to  help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
    `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
    `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
    `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`
];

function getId(id){
    if(check[id] == false){
        check[id] = true;
        showAnswer(id);
    } else{
        check[id] = false;
        hiddeAnswer(id);
    }
}

function showAnswer(id) {
    //seleccion del elemento
    questionId = document.getElementById(id);
    //mostrar respuesta
    let answerElement = document.createElement(`p`);
    answerElement.textContent = answers[id];
    answerElement.id = `answer${id}`;
    answerElement.classList.add(`answers`);
    questionId.insertAdjacentElement(`afterend`, answerElement);
    //replmzar imagen
    let newImage = document.createElement(`img`);
    let oldImage = document.getElementById(`p${id}`);
    newImage.src = `assets/images/icon-minus.svg`;
    newImage.id= `p${id}`;
    newImage.classList.add(`button`);
    questionId.replaceChild(newImage, oldImage);
}

function hiddeAnswer(id){
        console.log(id);
        //seleccion de los elementos
        fatherId = document.getElementById(`father`);
        answerId = document.getElementById(`answer${id}`);
        //mostrar respuesta
        fatherId.removeChild(answerId);
        //remplzar imagen
        let newImage = document.createElement(`img`);
        let oldImage = document.getElementById(`p${id}`);
        newImage.src = `assets/images/icon-plus.svg`;
        newImage.id= `p${id}`;
        newImage.classList.add(`button`);
        questionId.replaceChild(newImage, oldImage);
}


