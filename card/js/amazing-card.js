import Card from './card.js';

export default class AmazingCard extends Card {
  set cardNumber(value) {
    const cardsImgArray = [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
    ];
    const img = document.createElement('img');
    img.src = cardsImgArray[value - 1];
    this.card.append(img);

    img.onerror = () => {
      img.src = './img/default.png';
      throw new Error('Картинка не загрузилась');
    };
  }

  get cardNumber() {
    return this._cardNumber;
  }
}
