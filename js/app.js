/**
 * @param {array} resources - collection of resources
 */
const resources = [{
    requirement: "Game Behavior",
    type: "Blog/Article",
    page: "How to handle event handling in JavaScript",
    url: "https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57",
    sharer: "Linda"
  },
  {
    requirement: "Timer",
    type: "Tutorial",
    page: "JavaScript Timing Events",
    url: "https://www.w3schools.com/js/js_timing.asp",
    sharer: "Sara Krum"
  }
]

const requirementsList = [
  "Game Behavior",
  "Memory Game Logic",
  "Congratulations Popup",
  "Restart Button",
  "Star Rating",
  "Timer",
  "Move Counter",
  "Interface Design",
  "Documentation"
];

/**
 * @description create main element when page loads
 * @todo Try and do IFFE for page loads
 */
const loadPage = () => {
  mainElement();
}

/**
 * @description add main element for start of requirement cards
 */
const mainElement = () => {
  const main = document.createElement('main');
  const requirements = document.body.appendChild(main)
    // add class name to element
    .classList.add('requirements');
  sectionElement();
}

/**
 * @description loop through array of requirements to create each section
 * @todo if there are no resources for a requirement, don't create section
 */
const sectionElement = () => {
  for (i = 0; i < requirementsList.length; i++) {
    const requirement = document.querySelector('main')
      .insertAdjacentHTML('afterbegin', `<section class="requirement"></section>`);

    requirementHeader();
  }
}

/**
 * @description add requirement text in h2 tag
 */
const requirementHeader = () => {
  document.querySelector('.requirement')
    .insertAdjacentHTML('beforeend', `<h2 class="requirement-header">${requirementsList[i]}</h2>`);
}

document.body.onload = loadPage();
