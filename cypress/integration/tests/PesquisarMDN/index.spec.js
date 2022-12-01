/// <reference types="Cypress" />
import MdnBase from '../../../support/pageObjects/mdnBase';

Given("que eu acesso a pagina home mdn", () => {
  MdnBase.acessBaseUrl();
})

Then("devo visualizar o input de busca da MDN", () => {
  cy.get('input[id="top-nav-search-input"]')
    .should('be.visible');
})

And("digito http {} no input de buscar", (status) => {
  cy.get('input[id="top-nav-search-input"]')
    .type(status);
})

When("clico no {}", (status) => {
  cy.get(`a[href="/pt-BR/docs/Web/HTTP/Status/${status}"]`)
    .first()
    .click();
})

Then("visualizo a pagina do http status com o {}", (statusTitle) => {
  cy.get('article[class="main-page-content"] > h1')
    .should('contain', statusTitle);
})
