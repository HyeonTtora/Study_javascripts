let querrySingle = document.querySelector("#single");
querrySingle.addEventListener("click",singleEvent);
// querrySingle.addEventListener("click",function(event){
    // singleEvent(event);
// })
// querrySingle.addEventListener("click",(event)=>{
//     singleEvent(event);
// })
// querrySingle.addEventListener("double-click", singleEvent);

function singleEvent(event){
    console.log(event);
    querrySingle.innerHTML = "Take One Event!";
}

