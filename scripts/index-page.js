import {BandSiteApi, myApiKey} from './band-site-api.js';

//Create new instance of BandSiteApi class
const bandSite = new BandSiteApi(myApiKey);

//Date formatter
const specFormat = {
    year:"numeric", 
    month:"2-digit", 
    day:"2-digit"
};

const dateFormatter = Intl.DateTimeFormat('en-US',specFormat);

// Create comment card

function createCommentCard(comment) {
    //create comment card as an article
    const commentCard = document.createElement('article');
    commentCard.classList.add('comments__item');

    //add comment avatar
    const commentAvatar = document.createElement('p');
    commentAvatar.classList.add('comments__item-avatar');
    
    commentCard.appendChild(commentAvatar);

    //add comment content div
    const commentContent = document.createElement('div');
    commentContent.classList.add('comments__item-content');

    commentCard.appendChild(commentContent);

    //add comment elements to comment content div
    const commentName = document.createElement('p');
    commentName.classList.add('comments__item-name');
    commentName.innerText = comment.name;
    const commentDate = document.createElement('p');
    commentDate.classList.add('comments__item-date');
    commentDate.innerText = dateFormatter.format(comment.timestamp);
    const commentText = document.createElement('p');
    commentText.classList.add('comments__item-text');
    commentText.innerText = comment.comment;

    commentContent.appendChild(commentName);
    commentContent.appendChild(commentDate);
    commentContent.appendChild(commentText);

    return commentCard;
}

//Render comments list
function renderComment(comments) {
    const commentList = document.querySelector('.comments__list');

    //Clear comment list
    commentList.innerHTML = "";

    //Render all comments in the array
    for (let i = 0 ; i < comments.length; i++ ) {
        const card = createCommentCard(comments[i]);
        commentList.appendChild(card);
    }
}

//Construct new comment object upon form submit
function formSubmitHandler(event) {
    event.preventDefault();

    //construct new comment object
    const commentNew = {
        name: event.target.userName.value,
        comment: event.target.text.value
    };

    //post new comment object to the API and re-render the comments list
    bandSite.postComment(commentNew)
    .then(() => {
        const comments = bandSite.getComments()
        .then((comments) => {
            renderComment(comments);
        })
        .catch((error) => {
            console.error(error);
        });
    })
    .catch((error) => {
        console.error(error);
    });

    //Clear form after submit
    const clearForm = document.querySelector('.comments__form')
    clearForm.reset();
}

const commentForm = document.querySelector('.comments__form');
commentForm.addEventListener('submit',formSubmitHandler);
const comments = await bandSite.getComments()
.then((comments) => {
    renderComment(comments);
})
.catch((error) => {
    console.error(error);
});