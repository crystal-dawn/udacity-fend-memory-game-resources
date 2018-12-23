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
    for (r = 0; r < resources.length; r++) {
      if (resources[r].requirement === requirementsList[i]) {
        const requirement = document.querySelector('main')
          .insertAdjacentHTML('afterbegin', `<section class="requirement"></section>`);

        requirementHeader();
      }
    }
  }
}

/**
 * @description add requirement text in h2 tag
 */
const requirementHeader = () => {
  document.querySelector('.requirement')
    .insertAdjacentHTML('beforeend', `<h2 class="requirement-header">${requirementsList[i]}</h2>`);

  resourceRequirements();
}

/**
 * @description check if requirement has a type section
 * @param {array} resources
 * @param {array} requirements
 */
const resourceRequirements = () => {
  console.log(resources[r].requirement, requirementsList[i], resources[r].requirement === requirementsList[i]);
  resourceType();
}

/**
 * @description add type section
 */
const resourceType = () => {
  document.querySelector('h2')
  .insertAdjacentHTML('afterend', `<section class="type">
    <h3 class="type-header">${resources[r].type}</h3></section>`);

  resourceCard();
}

/**
 * @description add resource cards
 */
const resourceCard = () => {
  document.querySelector('h3')
  .insertAdjacentHTML('afterend',
    `<button class="resource">
    <a class="link" href=${resources[r].url}>${resources[r].page}
    </br>
    <span class="credit">Shared by: @${resources[r].sharer}</span>
    </a>`
  )
}

document.body.onload = loadPage();
