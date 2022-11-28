
       
// let queryItems = document.querySelectorAll(".item")
// queryITems.forEach((item, index) => {
//     console.log(item);
// });

let queryTitle = document.querySelector("#title");
queryTitle.innerHTML = "query Title!"; //querySelector로 바꾸기 

let queryITems = document.querySelectorAll(".item");

        // let titleById = document.getElementById("title");
        // titleById.innerHTML = "Title By Id"; //바꾸기


let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");

let pByTagName = document.getElementsByTagName("p");
// console.log(`${pByTagName}`);
// pByTagName.innerHTML = "클릭하세요!";


let listByClassName = document.getElementsByClassName("list");
console.log(`${listByClassName}`);

let elementhById = document.getElementById("selector")
// console.log(`elementhById: ${elementhById}`);
elementhById.innerHTML = "<b>Change selector<b>";

// change properties from querySelector 
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0,0.5)";

let queryContent = document.querySelector("#contentId");