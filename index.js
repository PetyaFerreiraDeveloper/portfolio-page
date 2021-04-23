
// ********** PROJECTS DATA ********** //
// later implement with JSON
const projects = [
    {
        id: 1,
        title: 'About Me',
        description: 'A page describing my professional and personal achievements in chronological order. It also contains information about my interests and the goals which drive my personal and professional development.',
        stack: 'stack: HTML, CSS',
        img: './images/petya-face.jpg'
    },
    {
        id: 2,
        title: 'Portfolio Page',
        description: 'This is the page which keeps track of my projects and development as a programmer.',
        stack: 'stack: HTML, CSS, JS',
        img: './images/portfolio-page.png'
    },
    {
        id: 3,
        title: 'Project 3',
        description: '"To dare is to lose ones footing momentarily. Not to dare is to lose oneself."',
        stack: 'stack: HTML, CSS',
        img: './images/logo.jpeg'
    },
    {
        id: 4,
        title: 'Project 4',
        description: '"If at first the idea is not absurd, then there is no hope for it."',
        stack: 'stack: HTML, CSS',
        img: './images/our-baby-logo.png'
    },
];


// add the overlay when the tile is clicked
// grab the tile, the overlay and the close button
let tileContainer = document.getElementById('tile-container');
let overlay = document.getElementById('overlay');
let closeOverlay = document.querySelector('.close-overlay');
tileContainer.addEventListener('click', function() {
    overlay.classList.add('open-overlay');
});

closeOverlay.addEventListener('click', function() {
    overlay.classList.remove('open-overlay');
});


// ********** OPEN AND CLOSE THE ABOUT ME MORE SECTION ********** //
// navigate between projects by clicking the arrows
// we need to add an event listener to the project-container, 
// when an arrow is clicked, identify which one is clicked and 
// show the information from either the next or previous element in the projects array

// grab the project-container and each of the items we want changed on click
let projectContainer = document.getElementById('project-container');
let title = document.getElementById('project-title');
let description = document.getElementById('project-description');
let stack = document.getElementById('project-stack');
let img = document.getElementById('img');

// create a function which will show info about the project at a certain index
// We will call this function when an arrow is clicked

function showProject(index) {
    let project = projects[index]; 
    title.textContent = project.title; 
    description.textContent = project.description;
    stack.textContent = project.stack;
    img.src = project.img;
}

let currentItem = 0; // create a variable to follow where in the array we are(the index of the element)

// load initial item with event listener for Window load object, in stead of loading the hard coded html
window.addEventListener('DOMContentLoaded', showProject(0));


// lets create the event listener for the arrows click
projectContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList == 'next-btn' || target.classList == 'fas fa-chevron-right fa-3x') {
        currentItem++;
        if (currentItem > projects.length - 1) {
            currentItem = 0;
        }
    } else if (target.classList == 'prev-btn' || target.classList == 'fas fa-chevron-left fa-3x') {
        currentItem--;
        if (currentItem < 0) {
            currentItem = projects.length - 1;
        }
    }
    showProject(currentItem);
})




// ********** OPEN AND CLOSE THE ABOUT ME MORE SECTION ********** //

// lets grab the button and the div box, which we will be opening
let buttonShow = document.getElementById('show-more');
let moreContent = document.getElementById('frontpage-text');
let buttonCollapse = document.getElementById('collapse');
let firstText = document.getElementById('first-text');

// when the show-more button is clicked, the div box should open, and a new button colled
// collapse should be placed under the new information

buttonShow.onclick = () => {
    if(moreContent.className == '') {
        // expand the box
        moreContent.className = 'open';
        // change the text on buttonShow
        buttonShow.innerHTML = 'Collapse';
        // remove the first-text
        firstText.className = 'hidden';
    } else {
        // collapse the box
        moreContent.className = '';
        buttonShow.innerHTML = 'more about me';
        firstText.className = '';
    }
}
// when the collapse button is clicked the box will change size and 
// the show-more button will reappear