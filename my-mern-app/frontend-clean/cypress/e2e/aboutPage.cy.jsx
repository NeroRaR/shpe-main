// cypress/e2e/aboutPage.cy.jsx

describe("About Page", () => {
  beforeEach(() => {
    cy.visit("/about"); // matches <a href="/about">
  });

  it("renders the About SHPE header", () => {
    cy.contains("About SHPE").should("be.visible");
  });

  it("renders the hero section correctly", () => {
    cy.contains("Who We Are & Where We Are Going").should("be.visible");
    cy.get('img[alt="Team collaboration"]').should("be.visible");
  });

  it("shows the Mission, Vision, and Values section", () => {

    cy.contains("Mission").should("be.visible");
    cy.contains("Vision").should("be.visible");
    cy.contains("Values").should("be.visible");
  });

  it("checks that values list items render", () => {
    cy.contains("Familia").should("exist");
    cy.contains("Service").should("exist");
    cy.contains("Education").should("exist");
    cy.contains("Resilience").should("exist");
  });

  it("renders the Our Reach section", () => {
    cy.contains("Our Reach").should("be.visible");

    cy.get('img[alt="SHPE chapters map"]').should("exist");
    cy.contains("Members").should("exist");
    cy.contains("Active Chapters").should("exist");
  });

  it("nav bar links exist and are clickable", () => {
    const pages = [
      "Home",
      "About",
      "OurTeam",
      "MemberShpe",
      "Calendar",
      "Resources",
      "Login",
    ];

    pages.forEach((page) => {
      cy.contains(page).should("exist");
    });
  });
});
