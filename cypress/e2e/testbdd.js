import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Je suis sur le site saucedemo", () => {
  cy.visit("https://www.saucedemo.com/");
});
When(
  "Je complete le formulaire d'authentification en tant que {string} et {string}",
  (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }
);

Then("Je suis connecté avec succès", () => {
  cy.url().should("include", "inventory.html");
  cy.get(".inventory_item").should("have.length", 6);
});
