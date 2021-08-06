import React from "react";

describe("Client", () => {
  it("should get all loans for the user", () => {
    cy.intercept("Post", "/auth/login").as("login");
    const email = "testuser@gmail.com";
    const password = "P@ssw0rd";
    cy.visit("/");
    cy.get("#email").type(email).get("#password").type(password).get("#loginForm").submit();
    cy.wait("@login").visit("/loans").get("#viewLoans").should("exist");
  });
});
