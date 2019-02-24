/**
 * @param {array} resources - collection of resources
 * @todo group resources by criteria and type instead of having separate
 *       objects
 */
const resources = [{
    criteria: "Game Behavior",
    type: "Blog/Article",
    page: "How to handle event handling in JavaScript",
    url: "https://medium.freecodecamp.org/event-handling-in-javascript-with-examples-f6bc1e2fff57",
    sharer: "Linda"
  },
  {
    criteria: "Timer",
    type: "Tutorial",
    page: "JavaScript Timing Events",
    url: "https://www.w3schools.com/js/js_timing.asp",
    sharer: "Sara Krum"
  },
  {
    criteria: "Game Behavior",
    type: "Documentation",
    page: "Using CSS transitions",
    url: "hhttps://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
    sharer: "Amy"
  },
  {
    criteria: "Game Behavior",
    type: "Documentation",
    page: "::before (:before)",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/::before",
    sharer: "Anthony (FEND)"
  },
  {
    criteria: "Congratulations Popup & Star Rating",
    type: "Answer",
    page: "What is the difference between visibility:hidden and display:none?",
    url: "https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone",
    sharer: "Ivan.ProjectCoach [FEND]"
  },
  {
    criteria: "Game Behavior",
    type: "Documentation",
    page: "Psuedo-elements",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",
    sharer: "Anthony (FEND)"
  },
  {
    criteria: "Timer",
    type: "Tutorial",
    page: "Practice Timer - A PEN BY Chris Neal",
    url: "https://codepen.io/chrisvneal/pen/OEMJyR?editors=0010",
    sharer: "Chris N [FEND]"
  },
  {
    criteria: "Congratulations Popup",
    type: "Tutorial",
    page: "How TO - CSS/JS Modal",
    url: "https://www.w3schools.com/howto/howto_css_modals.asp",
    sharer: "Ivan.ProjectCoach [FEND]"
  },
  {
    criteria: "Congratulations Popup & Star Rating",
    type: "Documentation",
    page: "display",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display",
    sharer: ""
  },
  {
    criteria: "Star Rating",
    type: "Tutorial",
    page: "HTML DOM appendChild() Method",
    url: "https://www.w3schools.com/jsref/met_node_appendchild.asp",
    sharer: ""
  },
  {
    criteria: "Timer",
    type: "Documentation",
    page: "WindowOrWorkerGlobalScope.setInterval()",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval",
    sharer: ""
  },
  {
    criteria: "Timer",
    type: "Library",
    page: "husa/timer.js",
    url: "https://github.com/husa/timer.js/",
    sharer: "Crystal"
  },
  {
    criteria: "Game Behavior",
    type: "Blog/Article",
    page: "How to manipulate classes without jQuery by using HTML5's classList API",
    url: "https://medium.freecodecamp.org/how-to-manipulate-classes-using-the-classlist-api-f876e2f58236",
    sharer: ""
  },
  {
    criteria: "Interface Design",
    type: "Library",
    page: "FONT AWESOMEv.4.7.0",
    url: "https://fontawesome.bootstrapcheatsheets.com/",
    sharer: "Sara Krum"
  },
  {
    criteria: "Game Behavior",
    type: "Blog/Article",
    page: "Things you should know about JS events",
    url: "https://medium.com/@pierreda/things-you-should-know-about-js-events-4ab474312736",
    sharer: "Linda"
  },
  {
    criteria: "Game Behavior",
    type: "Answer",
    page: "Confused on querySelector and getElementById",
    url: "https://www.reddit.com/r/learnjavascript/comments/356k1v/confused_on_queryselector_and_getelementbyid/",
    sharer: "Marsh[FEND]"
  },
  {
    criteria: "Game Behavior",
    type: "Documentation",
    page: "EventListener",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/EventListener",
    sharer: "Mitali {FEND}"
  },
  {
    criteria: "Game Behavior",
    type: "Tutorial",
    page: "JavaScript HTML DOM EventListener",
    url: "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
    sharer: "Mitali {FEND}"
  },
  {
    criteria: "Game Behavior",
    type: "Book",
    page: "Handling Events",
    url: "https://eloquentjavascript.net/15_event.html",
    sharer: "Mitali {FEND}"
  }
]

/**
 * @todo remove unused criterias dynamically
 */
const criteriasList = [
  "Game Behavior",
  // "Memory Game Logic",
  "Congratulations Popup & Star Rating",
  "Congratulations Popup",
  // "Restart Button",
  // "Star Rating",
  "Timer",
  // "Move Counter",
  // "Interface Design",
  // "Documentation",
];

const types = [
  "Tutorial",
  "Documentation",
  "Blog/Article",
  "Answer"
];
