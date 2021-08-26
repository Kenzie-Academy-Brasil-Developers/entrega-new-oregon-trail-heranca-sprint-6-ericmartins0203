const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doctor, viajante } = require("./../../app");

/**Given*/
Given('um Doctor de nome {string}', function (string) {
    doctor.name = string;
  });

Given('o Doctor sempre começa a viagem com {int} refeição', function (int) {
    doctor.food = int;
});

Given('o Doctor sempre começa a viagem saudável.', function () {
    doctor.isHealthy = true;
    });
/**When*/
When('o Doctor sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        doctor.hunt();
    }
});
When('o Doctor parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        doctor.eat();
    }
});
When('um viajante estiver doente', function () {
    viajante.isHealthy === false
  });
When('e o Doctor o curar', function () {
    doctor.heal(viajante)
});

/**Then*/
Then('a quantidade de refeições do Doctor deve ser igual a {int}', function (int) {
    assert.strictEqual(doctor.food, int);
});
Then('o Doctor não ficará doente', function () {
    assert.strictEqual(doctor.isHealthy, true)
});
Then('o Doctor ficará doente', function () {
    assert.strictEqual(doctor.isHealthy, false)
});
Then('o viajante não estará doente', function () {
    assert.strictEqual(viajante.isHealthy, true)
  });

