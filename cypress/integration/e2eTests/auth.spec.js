import React from "react";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should register a user", () => {
    const firstName = "Paul";
    const lastName = "Paul";
    const email = "aretha@gmail.com";
    const password = "P@ssw0rd";
    const confirmPassword = "Password";
    cy.visit("/register");
    cy.get("#firstName")
      .type(firstName)
      .get("#lastName")
      .type(lastName)
      .get("#email")
      .type(email)
      .get("#password")
      .type(password)
      .get("#confirmPassword")
      .type(confirmPassword)
      .get("#confirmPassword")
      .should("exist");
  });
  it("It should login a user", () => {
    const email = "bgpeter@gmail.com";
    const password = "P@ssw0rd";
    cy.visit("/");
    cy.get("#email").type(email).get("#password").type(password).get("#loginForm").get("#email").should("exist");
  });
});
