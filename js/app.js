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

/**
* @description loop through array of requirements to create each section
*/
for (i = 0; i < resources.length; i++) {
  /**
   * @description add main element for start of requirement cards
   */
  const main = document.createElement('main');
  const requirements = document.body.appendChild(main)
    // add class name to element
    .classList.add('requirements');

  /**
   * @description nest section element in main
   */
  const requirement = document.querySelector('main')
    .insertAdjacentHTML('afterend', `<section class="requirement"></section>`);

  /**
   * @description add requirement text in h2 tag
   */
  const requirementHeader = document.querySelector('.requirement')
    .insertAdjacentHTML('beforeend', `<h2 class="requirement-header">${resources[i].requirement}</h2>`);
}
