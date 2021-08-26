const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler");
const { hunter } = require("./../../app");

const traveler = new Traveler ('traveler')
/**Given*/
Given('um Hunter de nome {string}', function (string) {
    hunter.name = string
  });

Given('o Hunter sempre começa a viagem com {int} refeição', function (int) {
    hunter.food = int;
});

Given('o Hunter sempre começa a viagem saudável.', function () {
    hunter.isHealthy = true;
});

/**When*/
When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        hunter.hunt();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        hunter.eat();
    }
});
When('o Hunter der {int} refeições para um companheiro', function (int) {
    hunter.giveFood(traveler, int)
});

/**Then*/
Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
    assert.strictEqual(hunter._food, int);
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(hunter._isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    assert.strictEqual(hunter._isHealthy, false)
});