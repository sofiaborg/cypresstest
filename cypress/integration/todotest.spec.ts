describe("todolist test", () => {
    it("should add items to list", () => {

        //arrange
        cy.visit(http://localhost1234);
            
            cy.get("input").type("Jump");
        
        //act
        cy.get("button").click();


        //assert (verifiera)
        cy.get("ul li").should("have.length", 1);

    })
});