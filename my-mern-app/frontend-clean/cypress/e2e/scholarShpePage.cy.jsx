describe("ScholarShpe Page", () => {
  beforeEach(() => {
    cy.visit("/scholarshpe");
  });

  it("loads the ScholarShpe page", () => {
    cy.url().should("include", "/scholarshpe");
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


  it("shows scholarship-related content", () => {
    cy.contains(/scholar/i).should("exist");
  });
});