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
    const criterias = criteriasList.map((criteria, criteriaIndex) => {
      document.querySelector('main')
        .insertAdjacentHTML('afterbegin',
          `<section class="criteria">
             <div id="ctn${criteriaIndex}" style="position:relative;">
               <a id="criteria${criteriaIndex}">&nbsp;</a>
               <h2 class="criteria-header">${criteria}</h2>
             </div>
           </section>`);

      document.querySelector('ul').insertAdjacentHTML('afterbegin',
        `<li class="criteria-list">
           <a class="dropdown-link" href="#criteria${criteriaIndex}">${criteria}</a>
        </li>`)
      typeCard(criteria, criteriaIndex);
    })
  }
}

/**
 * @description create type cards for each type of resources
 */
const typeCard = (criteria, criteriaIndex) => {
  types.map((type, typeIndex) => {
    document.querySelector('section > div ')
    .insertAdjacentHTML('afterend',
      // criteriaIndex followed by typeIndex create a unique id for each type
      // card which is necessary to remove empty cards
      `<section class="type" id="${criteriaIndex}${typeIndex}">
        <h3 class="type-header">${type}</h3>
        <br/>
      `);
  resourceCard(criteria, type, criteriaIndex, typeIndex);
})
}

/**
 * @description create resource card buttons for each resource
 */
const resourceCard = (criteria, type, criteriaIndex, typeIndex) => {
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
  removeEmpty(criteriaIndex, typeIndex);
}

/**
 * @description Remove type cards that don't have children resource cards
 */
const removeEmpty = (criteriaIndex, typeIndex) => {
  let card = document.getElementById(`${criteriaIndex}${typeIndex}`);
  console.log(card.children.length);
  if (card.children.length === 2) {
    card.style.display = "none";
  }
}

document.body.onload = loadPage();
