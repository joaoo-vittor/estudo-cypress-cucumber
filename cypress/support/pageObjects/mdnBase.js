/// <reference types="Cypress" />
import {envs} from '../../common/envs'

class MdnBase {
  acessBaseUrl() {
    cy.visit(envs.BASE_URL);
  }
}

export default new MdnBase();
