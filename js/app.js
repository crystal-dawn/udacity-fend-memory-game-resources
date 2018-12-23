/**
 * @param {array} resources - collection of resources
 */
const resources = [{
  requirement: "Game Behavior",
  type: "Blog/Article",
  page: "How to handle event handling in JavaScript",
  url: "https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57",
  sharer: "Linda"
}]

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
  .insertAdjacentHTML('beforeend', `<section class="requirement"></section>`);

/**
* @description add requirement text in h2 tag
*/
const requirementHeader = document.querySelector('.requirement')
  .insertAdjacentHTML('beforeend', `<h2 class="requirement-header">${resources[0].requirement}</h2>`);
