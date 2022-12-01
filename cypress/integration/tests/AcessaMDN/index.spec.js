/// <reference types="Cypress" />
import MdnBase from '../../../support/pageObjects/mdnBase';

Given("que eu acesso a pagina home mdn", () => {
  MdnBase.acessBaseUrl();
})

Then("devo visualizar o botao \"Get MDN Plus\"", () => {
  cy
    .get('a[class="button primary mdn-plus-subscribe-link"]')
    .get('.button-wrap')
    .should('contain', 'Get MDN Plus')
})
