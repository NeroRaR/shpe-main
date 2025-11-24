// cypress/e2e/forgotPasswordPage.cy.jsx

describe("Forgot Password Page", () => {
  beforeEach(() => {
    cy.visit("/forgotpassword");
  });

  it("loads the forgot password page", () => {
    cy.url().should("include", "/forgotpassword");
    cy.contains("Forgot Password").should("be.visible");
  });

  it("shows email input and submit button", () => {
    cy.get('input[type="email"]').should("exist");
    cy.get('button[type="submit"]').should("contain", "Send Reset Link");
  });

  it("has a link back to Login", () => {
    cy.contains("Back to").should("be.visible");
    cy.contains("Login").should("have.attr", "href", "/login");
  });
});
