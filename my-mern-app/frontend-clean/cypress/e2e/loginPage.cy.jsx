describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("loads the login page", () => {
    cy.url().should("include", "/login");
    cy.contains("Login").should("be.visible");
  });

  it("shows the Home link in the sub-nav", () => {
    
    cy.get(".nav-buttons").contains("Home").should("exist");
  });

  it("shows the login form elements", () => {
    // Email or Username field (type=text, id=email)
    cy.get("#email").should("exist");

    // Password field
    cy.get('input[type="password"]').should("exist");

    // Submit button
    cy.get('button[type="submit"]').should("exist");
  });

  it("has links for Forgot Password and Sign Up", () => {
    cy.contains("Forgot Password?").should("exist");
    cy.contains("Sign Up").should("exist");
  });
});
