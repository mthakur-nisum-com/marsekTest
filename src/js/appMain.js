import '../assets/scss/app.scss';
import { randomArray, renderCards } from './services';
(function () {
    let numList = randomArray(1, 9);
    renderCards(numList, '.card-container-section');
    if (numList.length) {
        const shuffleBtn = document.querySelectorAll('.card-shuffle-btn');
        const sortBtn = document.querySelectorAll('.card-sort-btn');
        shuffleBtn[0].addEventListener('click', () => {
            numList = randomArray(1, 9);
            renderCards(numList, '.card-container-section');
        });
        sortBtn[0].addEventListener('click', () => {
            renderCards(numList.sort(), '.card-container-section')
        })
    }


})();