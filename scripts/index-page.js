//Create comment array
let comments = [
    {
        name:"Victor Pinto",
        timestamp: "11/02/2023",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name:"Christina Cabrera",
        timestamp: "10/28/2023",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name:"Isaac Tadesse",
        timestamp: "10/20/2023",
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

// Create comment card

function createCommentCard(comment) {
    //comment card as an article
    let commentCard = document.createElement('article');
    commentCard.classList.add('comments__item');

    //add comment avatar
    let commentAvatar = document.createElement('p');
    commentAvatar.classList.add('comments__item--avatar');
    
    commentCard.appendChild(commentAvatar);

    //add comment content div
    let commentContent = document.createElement('div');
    commentContent.classList.add('comments__item--content');

    commentCard.appendChild(commentContent);

    //add comment elements to comment content div
    let commentName = document.createElement('p');
    commentName.classList.add('comments__item--name');
    commentName.innerText = comment.name;
    let commentDate = document.createElement('p');
    commentDate.classList.add('comments__item--date');
    commentDate.innerText = comment.timestamp;
    let commentText = document.createElement('p');
    commentText.classList.add('comments__item--text');
    commentText.innerText = comment.text;

    commentContent.appendChild(commentName);
    commentContent.appendChild(commentDate);
    commentContent.appendChild(commentText);

    return commentCard;
}

//Render comments list
function renderComment() {
    let commentList = document.querySelector('.comments__list');

    //Clear comment list
    commentList.innerHTML = "";

    //Render all comments in the array
    for (let i = 0 ; i < comments.length; i++ ) {
        let card = createCommentCard(comments[i]);
        commentList.appendChild(card);
    }
}

//Construct new comment object upon form submit
function formSubmitHandler(event) {
    event.preventDefault();

    //construct new comment object
    let dateFormator = Intl.DateTimeFormat('en-US');

    let commentNew = {
        name: event.target.userName.value,
        timestamp: dateFormator.format(event.timestamp),
        text: event.target.text.value
    };

    //push new comment object to the comments list
    comments.push(commentNew);

    //re-render all comments
    renderComment();

    //Clear input after submit
    let clearForm = document.querySelector('.comments__form')
    clearForm.reset();
}

let commentForm = document.querySelector('.comments__form');
commentForm.addEventListener('submit',formSubmitHandler);
renderComment()

