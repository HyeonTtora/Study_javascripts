let removeBtn = document.querySelector("#removeBtn");

removeBtn.addEventListener("click", (event) => {
    removeEvent(event)
})

function removeEvent(event) {
    remove_border = document.querySelector('#remove_border');
    remove_border.style.display = 'none';
}



let hideBtn = document.querySelector('#hideBtn');

hideBtn.addEventListener("click", (event) => {
    hideEvent(event)
})

function hideEvent(event) {
    hide_border = document.querySelector('#hide_border');
    hide_border.style.visibility = 'hidden';
}



let resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener("click", (event) => {

 
        remove_border.style.display="flex";
        hide_border.style.visibility='visible';


});

