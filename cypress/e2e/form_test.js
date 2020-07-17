describe("Form Test", () => {
	it("is form working", () => {
		cy.visit("http://localhost:3000/");
		cy.get(':nth-child(7) > input')
		.type('pass')
		.clear('pass')
		cy.get('.error')
			.should('have.value', '')
		cy.get(':nth-child(1) > input')
			.type('Rob Lark')
			.should('have.value', 'Rob Lark')
		const email = 'robert.lark87@gmail.com'
		cy.get(':nth-child(4) > input')
			.type(email)
			.should('have.value', email)
		cy.get(':nth-child(7) > input')
			.type('password')
			.should('have.value', 'password')
		cy.get('.terms > input')
			.click()
			.should('have.checked', true)
		cy.get('button')
			.should('not.be.disabled')
		cy.get('img')
		.should('rotate')
	});
});
