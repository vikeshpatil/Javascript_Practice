import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearList = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
    const resultArr = Array.from(document.querySelectorAll('.results__link'));
    resultArr.forEach(el => {
        el.classList.remove('results__link--active');
    });

    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};

/**
 * 'Past with tomato and spinach'
 *  accumulator: 0 | accumulator + current.length = 5 | newTitle = ['Pasta']
 *  accumulator: 5 | accumulator + current.length = 9 | newTitle = ['Pasta', 'with']
 *  accumulator: 9 | accumulator + current.length = 15 | newTitle = ['Pasta', 'with', 'tomato']
 *  accumulator: 15 | accumulator + current.length = 18 | newTitle = ['Pasta', 'with', 'tomato']
 *  accumulator: 18 | accumulator + current.length = 24 | newTitle = ['Pasta', 'with', 'tomato']
 */

export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit){
        title.split(' ').reduce((accumulator, current) => {
            if(accumulator + current.length <= limit){
                newTitle.push(current);
            }
            return accumulator + current.length;
        }, 0);
        // return the result
        return `${newTitle.join(' ')} ...`;
    }

    return title;
} 


const renderRecipe = recipe => {
    const markup = `
            <li>
                <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                    <figure class="results__fig">
                        <img src="${recipe.image_url}" alt="${recipe.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                    </div>
                </a>
            </li>

    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);

};

// type: 'prev' or 'next'
const createButton = (page, type) => `
            <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1: page + 1}>
            <span>Page ${type === 'prev' ? page - 1: page + 1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
            
            </button>
`;

const renderButtons = (page, numResults, resPerPage) => {

    const pages = Math.ceil(numResults/resPerPage);

    let button;
    if(page === 1 && pages > 1){
        // Only button to go to next page
        button = createButton(page, 'next');
    }else if(page < pages){
        // both buttons
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}`;
    }else if(page === pages && pages > 1){
        // Only buttons to go to prev page
        button = createButton(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination buttons
    renderButtons(page, recipes.length, resPerPage);
};