describe("OurTeam Page", () => {
  beforeEach(() => {
    cy.visit("/ourteam");
  });

  it("loads the OurTeam page", () => {
    cy.url().should("include", "/ourteam");
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

  it("has some team-related content", () => {
    cy.contains(/team/i).should("exist");
  });
});