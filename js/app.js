/**
 * @description create main element when page loads
 * @todo Try and do IFFE for page loads
 */
const loadPage = () => {
  mainElement();
}

/**
 * @description add main element for start of criteria cards
 */
const mainElement = () => {
  document.querySelector('nav')
    .insertAdjacentHTML('afterend', `<main class="criterias"></main>`);

  criteriaCard();
}

/**
 * @description loop through array of criterias creating each section
 * @todo remove empty cards
 */
const criteriaCard = () => {
  for (i = 0; i < criteriasList.length; i++) {
    const criterias = criteriasList.map((criteria, index) => {
      document.querySelector('main')
        .insertAdjacentHTML('afterbegin',
          `<section class="criteria">
             <div id="ctn${index}" style="position:relative;">
               <a id="criteria${index}">&nbsp;</a>
               <h2 class="criteria-header">${criteria}</h2>
             </div>
           </section>`);

      document.querySelector('ul').insertAdjacentHTML('afterbegin',
        `<li class="criteria-list">
           <a class="dropdown-link" href="#criteria${index}">${criteria}</a>
        </li>`)
      typeCard(criteria);
    })
  }
}

/**
 * @description create type cards for each type of resources
 */
const typeCard = (criteria) => {
  types.map(type => {
    document.querySelector('section > div ')
      .insertAdjacentHTML('afterend',
        `<section class="type">
          <h3 class="type-header">${type}</h3>
        `);
    resourceCard(criteria, type);
  })
}

/**
 * @description create resource card buttons for each resource
 */
const resourceCard = (criteria, type) => {
  for (i = 0; i < resources.length; i++) {
    if (type === resources[i].type && criteria === resources[i].criteria) {
      document.querySelector('h3')
        .insertAdjacentHTML('afterend', `
          <button class="resource" tabindex="-1">
            <a class="resource-link" href=${resources[i].url}>
              ${resources[i].page}</br>
              <span class="credit">Shared by: ${resources[i].sharer}</span>
            </a>
           </button>
         </section>
        `)
    }
  }
}

document.body.onload = loadPage();
