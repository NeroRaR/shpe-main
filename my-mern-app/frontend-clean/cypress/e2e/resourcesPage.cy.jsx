describe("Resources Page", () => {
  beforeEach(() => {
    cy.visit("/resources");
  });

  it("loads the resources page", () => {
    cy.url().should("include", "/resources");
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


  it("has visible resources content", () => {
    cy.contains(/resource/i).should("exist");
  });
});