var suit = ['clubs', 'spades', 'diamonds', 'hearts'];
var picture = ['jack', 'queen', 'king', 'ace'];
var cards = [];

for (var i = 2; i <= 10; i++) {
  for (var j = 0; j < suit.length; j++) {
    var cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

    cards.push(`<div class="card">
            ${cardInfo}
            ${cardInfo}
        </div>`)
  }
}

for (var k = 0; k < picture.length; k++) {
  for (var l = 0; l < suit.length; l++) {
  var pictureSymbol = (['jack', 'queen', 'king',].includes(picture[k])) ? picture[k][0].toUpperCase() : (picture[k] === 'ace') ? 'T' : picture[k];
    var cardInfo = `<div class="card__info">${pictureSymbol}<img src="images/${suit[l]}.svg" alt="${suit[l]}"></div>`;
    cards.push(`<div class="card card--person">
            ${cardInfo}
            <img class="person" src="images/${picture[k]}.svg" alt="${picture[k]}">
            ${cardInfo}
        </div>`)
  }
}      

document.write(`<div class="wrapper">${cards.join('')}</div>`);

