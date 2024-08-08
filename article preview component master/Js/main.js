import {createShareElement,
        removeShareElement, 
        createProfileElement,
        createMobileShareElement
} from './functions.js';
let share = false;

function showAndHide() {
    const width = innerWidth;
    let newShow;
    
    if (width > 480) {
        const show = document.getElementById('porfile');
        if (!share) {
            newShow = createShareElement();
            show.parentElement.appendChild(newShow);
        } else {
            removeShareElement();
        }
    } else {
        if (!share) {
            const show = document.getElementById('porfile');
            newShow = createMobileShareElement();
            show.replaceWith(newShow);
        } else {
            const show = document.getElementById('sharePorfile');
            newShow = createProfileElement();
            show.replaceWith(newShow);
        }
    }

    share = !share;
}

window.addEventListener(`resize`, function(event) {
const width = innerWidth;
let newShow;
if(share){
    if(width > 480) {
        const show = document.getElementById('sharePorfile');
        if(show){
            newShow = createShareElement();
            show.parentElement.appendChild(newShow);
            newShow = createProfileElement();            
            show.replaceWith(newShow);
        }
        } else {
            const show = document.getElementById('porfile');
            if(document.getElementById(`shareSandwich`)){
                removeShareElement();
                newShow = createMobileShareElement();
                show.replaceWith(newShow);
            }
        }
    }    
});

window.showAndHide = showAndHide;
