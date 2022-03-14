///<reference types="Cypress"/>
let host = Cypress.env().conduit.host
let account = Cypress.env().conduit.account[0];

describe("Register", () => {
  it("login conduit", () => {
    cy.visit(host);

    // click signin button
    cy.get("a.nav-link").contains("Sign in").click();

    // enter login information
    cy.get("input[placeholder=Email").type(account.email);
    cy.get("input[placeholder=Password").type(account.passWord);
    cy.get("button[type=submit").contains("Sign in").click();

    // check login successfully or not
    cy.contains(`${account.userName}`).should("be.exist").and("be.visible");
  });
});
