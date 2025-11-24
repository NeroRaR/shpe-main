// cypress/e2e/signupPage.cy.jsx

describe("SignUp Page", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("loads the signup page", () => {
    cy.url().should("include", "/signup");
    cy.contains("Sign Up").should("be.visible");
  });

  it("shows the signup form fields", () => {
    cy.get('input[name="firstName"]').should("exist");
    cy.get('input[name="lastName"]').should("exist");
    cy.get('input[name="memberId"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("has a link back to Login", () => {
    cy.contains("Already have an account?").should("be.visible");
    cy.contains("Login")
      .should("have.attr", "href")
      .and("include", "/login");
  });
});
