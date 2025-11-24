describe("MemberShpe Page", () => {
  beforeEach(() => {
    cy.visit("/membershpe");
  });

  it("loads the MemberShpe page", () => {
    cy.url().should("include", "/membershpe");
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
      cy.contains("nav", text).should("exist");
    });
  });

  it("shows membership content or heading", () => {
    cy.contains(/member/i).should("exist");
  });
});