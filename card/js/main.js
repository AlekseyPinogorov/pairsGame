/* eslint-disable import/extensions */
// import Card from './card.js';
import AmazingCard from './amazing-card.js';

function newGame(container, cardsCount) {
  let cardsNumberArray = [];
  let cardsArray = [];
  let firstCard = null;
  let secondCard = null;

  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber !== secondCard.cardNumber) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard === null) {
      firstCard = card;
    } else if (secondCard === null) {
      secondCard = card;
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.cardNumber === secondCard.cardNumber) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (document.querySelectorAll('.card.success').length === cardsNumberArray.length) {
      setTimeout(() => {
        alert('Победа!');
        container.innerHTML = '';
        cardsNumberArray = [];
        cardsArray = [];
        firstCard = null;
        secondCard = null;

        newGame(container, cardsCount);
      }, 300);
    }
  }

  for (const cardNumber of cardsNumberArray) {
    const card = new AmazingCard(container, cardNumber, flip);
    cardsArray.push(card);
  }
}

newGame(document.getElementById('game'), 16);
