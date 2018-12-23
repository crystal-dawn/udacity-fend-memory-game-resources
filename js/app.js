/**
 * @param {array} resources - collection of resources
 * @todo group resources by requirement and type instead of having separate
 *       objects
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
  },
  {
    requirement: "Game Behavior",
    type: "Documentation",
    page: "Using CSS transitions",
    url: "hhttps://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
    sharer: "Amy"
  },
  {
    requirement: "Game Behavior",
    type: "Documentation",
    page: "::before (:before)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::before",
    sharer: "Anthony (FEND)"
  },
  {
    requirement: "Congratulations Popup & Star Rating",
    type: "Answer",
    page: "What is the difference between visibility:hidden and display:none?",
    url: "https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone",
    sharer: "Ivan.ProjectCoach [FEND]"
  },
  {
    requirement: "Game Behavior",
    type: "Documentation",
    page: "Psuedo-elements",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",
    sharer: "Anthony (FEND)"
  },
  {
    requirement: "Timer",
    type: "Tutorial",
    page: "Practice Timer - A PEN BY Chris Neal",
    url: "https://codepen.io/chrisvneal/pen/OEMJyR?editors=0010",
    sharer: "Chris N [FEND]"
  },
  {
    requirement: "Congratulations Popup",
    type: "Tutorial",
    page: "How TO - CSS/JS Modal",
    url: "https://www.w3schools.com/howto/howto_css_modals.asp",
    sharer: "Ivan.ProjectCoach [FEND]"
  },
  {
    requirement: "Congratulations Popup & Star Rating",
    type: "Documentation",
    page: "display",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
    sharer: ""
  },
  {
    requirement: "Star Rating",
    type: "Tutorial",
    page: "HTML DOM appendChild() Method",
    url: "https://www.w3schools.com/jsref/met_node_appendchild.asp",
    sharer: ""
  },
  {
    requirement: "Timer",
    type: "Documentation",
    page: "WindowOrWorkerGlobalScope.setInterval()",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval",
    sharer: ""
  },
  {
    requirement: "Timer",
    type: "Library",
    page: "husa/timer.js",
    url: "https://github.com/husa/timer.js/",
    sharer: "Crystal"
  },
  {
    requirement: "Game Behavior",
    type: "Blog/Article",
    page: "How to manipulate classes without jQuery by using HTML5's classList API",
    url: "https://medium.freecodecamp.org/how-to-manipulate-classes-using-the-classlist-api-f876e2f58236",
    sharer: ""
  },
  {
    requirement: "Congratulations Popup",
    type: "Tutorial",
    page: "How TO - CSS/JS Modal",
    url: "https://www.w3schools.com/howto/howto_css_modals.asp",
    sharer: "Ivan.ProjectCoach [FEND]"
  },
  {
    requirement: "Interface Design",
    type: "Library",
    page: "FONT AWESOMEv.4.7.0",
    url: "https://fontawesome.bootstrapcheatsheets.com/",
    sharer: "Sara Krum"
  },
  {
    requirement: "Game Behavior",
    type: "Blog/Article",
    page: "Things you should know about JS events",
    url: "https://medium.com/@pierreda/things-you-should-know-about-js-events-4ab474312736",
    sharer: "Linda"
  },
  {
    requirement: "Game Behavior",
    type: "Answer",
    page: "Confused on querySelector and getElementById",
    url: "https://www.reddit.com/r/learnjavascript/comments/356k1v/confused_on_queryselector_and_getelementbyid/",
    sharer: "Marsh[FEND]"
  },
  {
    requirement: "Game Behavior",
    type: "Documentation",
    page: "EventListener",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/EventListener",
    sharer: "Mitali {FEND}"
  },
  {
    requirement: "Game Behavior",
    type: "Tutorial",
    page: "JavaScript HTML DOM EventListener",
    url: "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
    sharer: "Mitali {FEND}"
  },
  {
    requirement: "Game Behavior",
    type: "Book",
    page: "Handling Events",
    url: "https://eloquentjavascript.net/15_event.html",
    sharer: "Mitali {FEND}"
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
  "Documentation",
  "Congratulations Popup & Star Rating"
];

const types = [
  "Answer",
  "Blog/Article",
  "Documentation",
  "Tutorial"
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

  requirementCard();
}

/**
 * @description loop through array of requirements creating each section
 * @todo remove empty cards
 */
const requirementCard = () => {
  const requirements = requirementsList.map(requirement => {
    document.querySelector('main')
      .insertAdjacentHTML('afterbegin',
        `<section class="requirement">
          <h2 class="requirement-header">${requirement}</h2>
        </section>`);
        typeCard(requirement);
  })
}

/**
* @description create type cards for each type of resources
*/
const typeCard = (requirement) => {
 types.map(type => {
    document.querySelector('h2')
      .insertAdjacentHTML('beforeend',
        `<section class="type">
          <h3 class="type-header">${type}</h3>
        </section>`);
    // resourceCard(requirement);
  })
}

/**
 * @description create resource card buttons for each resource
 * @todo sections for type
 */
const resourceCard = (requirement) => {
  for (i = 0; i < resources.length; i++) {
    if (resources[i].requirement === requirement) {

      // console.log(resources[i].requirement);
      document.querySelector('section')
        .insertAdjacentHTML('beforeend', `
        <section class="type">
         <h3 class="type-header">${resources[i].type}</h3>
          <button class="resource">
            <a class="link" href=${resources[i].url}>
              <h4>${resources[i].page}</h4>
              </br>
              <span class="credit">Shared by: ${resources[i].sharer}</span>
            </a>
           </button>
         </section>
        `)
    }
  }
}

document.body.onload = loadPage();
