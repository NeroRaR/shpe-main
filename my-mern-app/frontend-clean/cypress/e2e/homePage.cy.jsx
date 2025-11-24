describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the home page", () => {
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("shows the global nav links", () => {
    const links = [
      "Home",
      "About",
      "OurTeam",
      "MemberShpe",
      "Calendar",
      "Resources",
      "Login",
    ];

    links.forEach((text) => {
      cy.get(".nav-buttons").contains(text).should("exist");
    });
  });

  it("has main content on the page", () => {
    cy.get("main, .page-wrapper, .container").should("exist");
  });
});