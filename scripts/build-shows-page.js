import {BandSiteApi, myApiKey} from './band-site-api.js';

//Retrieve comments array from API
const bandSite = new BandSiteApi(myApiKey);
let shows = await bandSite.getShows();

//Date formatter
const specFormat = {
    year:"numeric", 
    month:"2-digit", 
    day:"2-digit"
};

const dateFormatter = Intl.DateTimeFormat('en-US',specFormat);

//Create show item

function createShowItemMobile(show) {
    //shows item as an article
    const showItem = document.createElement('article');
    showItem.classList.add('shows__item');

    //create item labels
    const dateLabel = document.createElement('p');
    dateLabel.classList.add('shows__item-label')
    dateLabel.innerText = "DATE";

    const venueLabel = document.createElement('p');
    venueLabel.classList.add('shows__item-label')
    venueLabel.innerText = "VENUE";

    const locationLabel = document.createElement('p');
    locationLabel.classList.add('shows__item-label')
    locationLabel.innerText = "LOCATION";

    //create item content from array
    const dateInfo = document.createElement('p');
    dateInfo.classList.add('shows__item-content');
    dateInfo.classList.add('shows__item--bold');
    dateInfo.innerText = dateFormatter.format(show.date);

    const venueInfo = document.createElement('p');
    venueInfo.classList.add('shows__item-content');
    venueInfo.innerText = show.place;

    const locationInfo = document.createElement('p');
    locationInfo.classList.add('shows__item-content');
    locationInfo.innerText = show.location;

    //create button
    const buyTicket = document.createElement('button');
    buyTicket.innerText = "BUY TICKETS";

    //add all elements to the item
    showItem.appendChild(dateLabel);
    showItem.appendChild(dateInfo);
    showItem.appendChild(venueLabel);
    showItem.appendChild(venueInfo);
    showItem.appendChild(locationLabel);
    showItem.appendChild(locationInfo);
    showItem.appendChild(buyTicket);

    return showItem;
}

function createShowItemTablet(show) {
    //shows item as an article
    const showItem = document.createElement('article');
    showItem.classList.add('shows__item');

    //create item content from array
    const dateInfo = document.createElement('p');
    dateInfo.classList.add('shows__item-content');
    dateInfo.classList.add('shows__item--bold');
    dateInfo.innerText = dateFormatter.format(show.date);

    const venueInfo = document.createElement('p');
    venueInfo.classList.add('shows__item-content');
    venueInfo.innerText = show.place;

    const locationInfo = document.createElement('p');
    locationInfo.classList.add('shows__item-content');
    locationInfo.innerText = show.location;

    //create button
    const buyTicket = document.createElement('button');
    buyTicket.innerText = "BUY TICKETS";

    //add all elements to the item
    showItem.appendChild(dateInfo);
    showItem.appendChild(venueInfo);
    showItem.appendChild(locationInfo);
    showItem.appendChild(buyTicket);

    return showItem;
}

//Change show item background color on clicked
function selectedItem() {
    const showItems = document.querySelectorAll('.shows__item');
    showItems.forEach((item) => {
        item.addEventListener('click', () => {
            showItems.forEach((i) => {
                i.classList.remove('shows__item--selected');
            });
            item.classList.add('shows__item--selected');
        })
    });
};


//Render shows list
function renderShowMobile() {
    const showList = document.querySelector('.shows__list');

    showList.innerHTML = "";

    shows.forEach((show) => {
        let showItem = createShowItemMobile(show);
        showList.appendChild(showItem);
    })
}

function renderShowTablet() {
    const showList = document.querySelector('.shows__list');

    showList.innerHTML = "";

    //create Date, Venue, Location headings 
    const showHeading = document.createElement('div');
    showHeading.classList.add('shows__heading');

    const dateLabel = document.createElement('p');
    dateLabel.classList.add('shows__item-label')
    dateLabel.innerText = "DATE";

    const venueLabel = document.createElement('p');
    venueLabel.classList.add('shows__item-label')
    venueLabel.innerText = "VENUE";

    const locationLabel = document.createElement('p');
    locationLabel.classList.add('shows__item-label')
    locationLabel.innerText = "LOCATION";

    showHeading.appendChild(dateLabel);
    showHeading.appendChild(venueLabel);
    showHeading.appendChild(locationLabel);

    showList.appendChild(showHeading);

    shows.forEach((show) => {
        const showItem = createShowItemTablet(show);
        showList.appendChild(showItem);
    })
}

function renderShow() {
    if (window.innerWidth < 980) {
        renderShowMobile();
    } else if (window.innerWidth >= 980) {
        renderShowTablet();
    } else;
    selectedItem();
}

renderShow();

//Render Shows when changing screen size
const screenSize = window.matchMedia("(min-width: 980px)");

screenSize.addEventListener('change', (event) => {
    if (event.matches) {
        renderShowTablet();
    } else {
        renderShowMobile();
    };
    selectedItem();
  });