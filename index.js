
// ********** PROJECTS DATA ********** //
// later implement with JSON
const projects = [
    {
        id: 1,
        title: 'Barista Coffee Cup Challenge',
        description: 'This is a responsive website I built for a developer challenge from twentyfour.dk',
        stack: 'stack: HTML, CSS, JS',
        img: './images/logo.jpeg',
        webPage: 'https://petyaferreiradeveloper.github.io/brown-rabbit-github/',
        github: 'https://github.com/PetyaFerreiraDeveloper/brown-rabbit-github',
        detail: 'work-in-progress.html'
    },
    {
        id: 2,
        title: 'About Me',
        description: 'A page describing my professional and personal achievements in chronological order. It also contains information about my interests and the goals which drive my personal and professional development.',
        stack: 'stack: HTML, CSS',
        img: './images/petya-face.jpg',
        webPage: 'https://petyaferreiradeveloper.github.io/PetyaPage/',
        github: 'https://github.com/PetyaFerreiraDeveloper/PetyaPage.git',
        detail: 'https://petyaferreiradeveloper.github.io/PetyaPage/about-me-detail/index.html'
    },
    {
        id: 3,
        title: 'Portfolio Page',
        description: 'This is the page which keeps track of my projects and development as a programmer.',
        stack: 'stack: HTML, CSS, JS',
        img: './images/portfolio-page.png',
        webPage: 'https://petyaferreiradeveloper.github.io/portfolio-page/',
        github: 'https://github.com/PetyaFerreiraDeveloper/portfolio-page.git',
        detail: './portfolio-detail/index.html'
    },
    {
        id: 4,
        title: 'Project 4',
        description: '"If at first the idea is not absurd, then there is no hope for it." by Albert Einstein',
        stack: 'stack: HTML, CSS',
        img: './images/our-baby-logo.png',
        webPage: 'work-in-progress.html',
        github: 'work-in-progress.html',
        detail: 'work-in-progress.html'
    },
];

// ********** MOBILE NAVIGATION ********** //
let hamburger = document.getElementById('hamburger-bars');
let mobileNav = document.querySelector('.mobile-nav');
let overlay = document.getElementById('overlay');

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open');
    overlay.classList.add('open');
});

overlay.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
    modal.classList.remove('open-modal');
    moreContent.classList.remove('open');
    firstText.classList.remove('hidden');
})

mobileNav.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
})

// ********** OPEN AND CLOSE THE MORE ABOUT ME SECTION ********** //

// lets grab the buttons and the div box, which we will be opening
let buttonShow = document.getElementById('show-more');
let moreContent = document.getElementById('more-content');
let buttonClose = document.getElementById('close');
let firstText = document.getElementById('first-text');
let tileContainer = document.getElementById('tile-container');
let closeModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal-links');

buttonShow.addEventListener('click', function() {
    overlay.classList.add('open');
    moreContent.classList.toggle('open');
    firstText.classList.add('hidden');
})

buttonClose.addEventListener('click', function() {
    moreContent.classList.toggle('open');
    firstText.classList.remove('hidden');
    overlay.classList.remove('open');
} );

closeModal.addEventListener('click', function() {
    overlay.classList.remove('open');
    modal.classList.remove('open-modal');
    
} );

tileContainer.addEventListener('click', function() {
    overlay.classList.add('open');
    modal.classList.add('open-modal');
});

// ********** BLURRING OF BACKGROUND VIDEO ********** //

const loadStatus = document.querySelector('.loading-status');
const video = document.querySelector('.video-container');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }

    loadStatus.innerText = `${load}%`;
    loadStatus.style.opacity = scale(load, 0, 100, 1, 0);
    video.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

// ********** NAVIGATE THE PROJECTS ********** //

// add an event listener to the project-container, 
// when an arrow is clicked, identify which one is clicked and 
// show the information from either the next or previous element in the projects array
// we also change the links in the overlay with the same function

// grab the project-container and each of the items we want changed on click
let projectContainer = document.getElementById('project-container');
let title = document.getElementById('project-title');
let description = document.getElementById('project-description');
let stack = document.getElementById('project-stack');
let img = document.getElementById('img');
let webPage = document.getElementById('web-page');
let github = document.getElementById('github');
let detail = document.getElementById('detail');

// create a function which will show info about the project at a certain index
// We will call this function when an arrow is clicked

function showProject(index) {
    let project = projects[index]; 
    title.textContent = project.title; 
    description.textContent = project.description;
    stack.textContent = project.stack;
    img.src = project.img;
    webPage.href = project.webPage;
    github.href = project.github;
    detail.href = project.detail;
}

let currentItem = 0; // create a variable to follow where in the array we are(the index of the element)

// load initial item with event listener for Window load object, in stead of loading the hard coded html
window.addEventListener('DOMContentLoaded', showProject(0));

// lets create the event listener for the arrows click
projectContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList == 'next-btn' || target.classList == 'fas fa-chevron-right fa-3x') {
        currentItem++;
        console.log(currentItem);
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

