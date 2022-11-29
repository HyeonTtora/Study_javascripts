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

let querrykeydown = document.querySelector("#keydown");
querrykeydown.addEventListener("keydown",(event)=>{
    console.log(event);
    if(event.code =='Enter'){
        keydownDesc(querrykeydown.value);
    }
    console.log(event.target);
});

let desc = querrykeydown.value

function keydownDesc(desc){
    let querrykeydownDesc = document.querySelector("#keydownDesc");
    querrykeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load",queryLoad()); 

function queryLoad(){
    queryload.innerHTML = "Done On Load!";

}
