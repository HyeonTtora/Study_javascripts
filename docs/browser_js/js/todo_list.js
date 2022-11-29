let comment = document.querySelector("#comment");
let commentBtn = document.querySelector("#commentBtn");
let newComment = document.querySelector('#commentDiv');
let notice = true; 
comment.addEventListener('keydown', (event) => {
    if(event.code=='Enter') {
        addComment(event);
        return;
    }
})

comment.addEventListener('click', (event) => {
    comment.value='';
    comment.style.color = 'black';
    notice=false;
})

commentBtn.addEventListener('click', (event) => {
    addComment(event);
})

newComment.addEventListener('click', (event) => {

    if (event.target.innerHTML == "delete") {
        event.target.parentElement.parentElement.remove();
    }

    if (event.target.id == "notFavorite") {
        event.target.id = "favorite";
        return;
    }
    if (event.target.id == "favorite") {
        event.target.id = "notFavorite";
        return;
    }

})

function addComment(event) {
    if(comment.value=="" || notice==true) {
        alert("댓글을 입력후 Add버튼을 클릭해주세요");
        return;
    }
    let newItem = `<div class="newComment">
            <span>
                    ${comment.value}
            </span>
            <span>
                <i class="material-symbols-outlined favozrite" id="notFavorite">favorite</i>
                <i class="material-icons delete">delete</i>
            </span>
        </div>`;
    newComment.insertAdjacentHTML('beforeend',newItem);
}