describe("Automation", () => {
    it("does the navigate automation", () => {
        // Go to https://example.cypress.io/
        cy.visit("https://example.cypress.io/");

        // On this page, go to Top bar > Commands menu
        cy.get("[data-toggle=\"dropdown\"]").contains("Commands").click();

        // Click on the Querying menu item to get to the Querying page
        cy.get("[class=dropdown-menu]").contains("Querying").click();

        // In the Querying page, there is a hyperlink with the text: "Best Practices: Selecting elements"
        cy.get("[id=best-practices] a")
            // Verify that it is a hyperlink by attribute
            .should("have.attr", "href")
            // Verify that the URL address is: https://on.cypress.io/best-practices#Selecting-Elements
            .should('eq', "https://on.cypress.io/best-practices#Selecting-Elements")
    });

    it("does the json validation", () => {

        cy.request('https://api.jsonbin.io/v3/b/62e129e3248d43754f074152')
            .then((response) => {
                // verify that the response status is 200
                expect(response.status).to.equal(200);

                // verify that the response body is an array with a length of 5
                expect(response.body.record).to.have.lengthOf(5);

                //Extract the team name of the first element.
                cy.request('https://api.jsonbin.io/v3/b/62e129e3248d43754f074152')
                    .then((response) => {
                        const team = response.body.record[0].team
                        console.log(team);
                        cy.visit("https://example.cypress.io/commands/querying");
                        cy.get('#inputName').type(team)
                    })


            });


    });


});
