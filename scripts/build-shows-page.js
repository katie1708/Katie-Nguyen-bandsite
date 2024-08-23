//Create shows array
let shows = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

//Create shows item

function createShowItemMobile(show) {
    //shows item as an article
    let showItem = document.createElement('article');
    showItem.classList.add('shows__item');

    //create item labels
    let dateLabel = document.createElement('p');
    dateLabel.classList.add('shows__item-label')
    dateLabel.innerText = "DATE";

    let venueLabel = document.createElement('p');
    venueLabel.classList.add('shows__item-label')
    venueLabel.innerText = "VENUE";

    let locationLabel = document.createElement('p');
    locationLabel.classList.add('shows__item-label')
    locationLabel.innerText = "LOCATION";

    //create item content from array
    let dateInfo = document.createElement('p');
    dateInfo.classList.add('shows__item-content');
    dateInfo.classList.add('date');
    dateInfo.innerText = show.date;

    let venueInfo = document.createElement('p');
    venueInfo.classList.add('shows__item-content');
    venueInfo.innerText = show.venue;

    let locationInfo = document.createElement('p');
    locationInfo.classList.add('shows__item-content');
    locationInfo.innerText = show.location;

    //create button
    let buyTicket = document.createElement('button');
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
    let showItem = document.createElement('article');
    showItem.classList.add('shows__item');

    //create item content from array
    let dateInfo = document.createElement('p');
    dateInfo.classList.add('shows__item-content');
    dateInfo.classList.add('date');
    dateInfo.innerText = show.date;

    let venueInfo = document.createElement('p');
    venueInfo.classList.add('shows__item-content');
    venueInfo.innerText = show.venue;

    let locationInfo = document.createElement('p');
    locationInfo.classList.add('shows__item-content');
    locationInfo.innerText = show.location;

    //create button
    let buyTicket = document.createElement('button');
    buyTicket.innerText = "BUY TICKETS";

    //add all elements to the item
    showItem.appendChild(dateInfo);
    showItem.appendChild(venueInfo);
    showItem.appendChild(locationInfo);
    showItem.appendChild(buyTicket);

    return showItem;
}

//Render shows list
function renderShowMobile() {
    let showList = document.querySelector('.shows__list');

    showList.innerHTML = "";

    for ( let i = 0 ; i < shows.length; i++ ) {
        showItem = createShowItemMobile(shows[i]);
        showList.appendChild(showItem);

    }
}

function renderShowTablet() {
    let showList = document.querySelector('.shows__list');

    showList.innerHTML = "";

    //create Date, Venue, Location headings 
    let showHeading = document.createElement('div');
    showHeading.classList.add('shows__heading');

    let dateLabel = document.createElement('p');
    dateLabel.classList.add('shows__item-label')
    dateLabel.innerText = "DATE";

    let venueLabel = document.createElement('p');
    venueLabel.classList.add('shows__item-label')
    venueLabel.innerText = "VENUE";

    let locationLabel = document.createElement('p');
    locationLabel.classList.add('shows__item-label')
    locationLabel.innerText = "LOCATION";

    showHeading.appendChild(dateLabel);
    showHeading.appendChild(venueLabel);
    showHeading.appendChild(locationLabel);

    showList.appendChild(showHeading);

    for ( let i = 0 ; i < shows.length; i++ ) {
        showItem = createShowItemTablet(shows[i]);
        showList.appendChild(showItem);

    }
}

function renderShow() {
    if (window.innerWidth < 980) {
        renderShowMobile();
    } else if (window.innerWidth >= 980) {
        renderShowTablet();
    } else;
}

renderShow();

const screenSize = window.matchMedia("(min-width: 980px)");

screenSize.addEventListener('change', (event) => {
    if (event.matches) {
        renderShowTablet();
    } else {
        renderShowMobile();
    }
  });
