import React from "react";

describe("Login", () => {
  it("should get all clients for the user", () => {
    cy.intercept("Post", "/auth/login").as("login");
    const email = "bgpeter@gmail.com";
    const password = "P@ssw0rd";
    cy.visit("/");
    cy.get("#email").type(email).get("#password").type(password).get("#loginForm").submit();
    cy.wait("@login").visit("/clients").get("#clientTable").should("exist");
  });
  it("should get add a client", () => {
    const firstName = "cypress";
    const lastName = "user";
    const email = "cypressUser@gmail.com";
    const address = "Najeera";
    const city = "Kampala";
    const country = "Uganda";
    const contact = "+256777777";
    cy.visit("/clients")
      .get(".makeStyles-addButton-3")
      .click()
      .get("#firstName")
      .type(firstName)
      .get("#lastName")
      .type(lastName)
      .get("#email")
      .type(email)
      .get("#address")
      .type(address)
      .get("#city")
      .type(city)
      .get("#country")
      .type(country)
      .get("#contact")
      .type(contact)
      .get(".makeStyles-form-42")
      .submit()
      .get(".makeStyles-close-45")
      .click()
      .get("#clientTable")
      .should("exist");
  });
});
