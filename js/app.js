/**
 * @todo remove unused requirements dynamically
 */
const requirementsList = [
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
  document.querySelector('nav')
  .insertAdjacentHTML('afterend', `<main class="requirements"></main>`);

  requirementCard();
}

/**
 * @description loop through array of requirements creating each section
 * @todo remove empty cards
 */
const requirementCard = () => {
  for (i = 0; i < requirementsList.length; i++) {
    const requirements = requirementsList.map((requirement, index) => {
      document.querySelector('main')
        .insertAdjacentHTML('afterbegin',
          `<section class="requirement">
          <h2 class="requirement-header" id="requirement${index}">${requirement}</h2>
        </section>`);

            document.querySelectorAll('span')[1].insertAdjacentHTML('afterbegin',
              `<a class="dropdown-content-link" href="#requirement${index}">${requirement}</a>`)
      typeCard(requirement);
    })

  }
}

/**
 * @description create type cards for each type of resources
 */
const typeCard = (requirement) => {
  types.map(type => {
    document.querySelector('h2')
      .insertAdjacentHTML('afterend',
        `<section class="type">
          <h3 class="type-header">${type}</h3>
          <br/>
        `);
    resourceCard(requirement, type);
  })
}

/**
 * @description create resource card buttons for each resource
 */
const resourceCard = (requirement, type) => {
  for (i = 0; i < resources.length; i++) {
    if (type === resources[i].type && requirement === resources[i].requirement) {
      document.querySelector('h3')
        .insertAdjacentHTML('afterend', `
          <button class="resource">
            <a class="link" href=${resources[i].url}>
              <h4 class="link-header">${resources[i].page}</h4>
              <span class="credit">Shared by: ${resources[i].sharer}</span>
            </a>
           </button>
         </section>
        `)
    }
  }
}

document.body.onload = loadPage();
