describe('Anasayfa tesleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  
  it('Metin kontrolü', () => {
    cy.contains('KOD ACIKTIRIR PİZZA, DOYURUR');
    
  })
  it("birden fazla malzeme seçmek", () => {
    cy.visit('http://localhost:5173/')
    cy.get("[data-cy=home-button]").click()
    cy.url().should('include', '/order-pizza')
    cy.get("[data-cy=input-topping-0]").check()
    cy.get("[data-cy=input-topping-1]").check()
    cy.get("[data-cy=input-topping-2]").check()
  })
  it("formu göndermek", () => {
    cy.visit('http://localhost:5173/')
    cy.get("[data-cy=home-button]").click()
    cy.url().should('include', '/order-pizza')
    cy.get("[data-cy=kucuk-size-input]").check()
    cy.get("[data-cy=dough-select]").select('Kalın')
    cy.get("[data-cy=name-input]").type('Aslı')
    cy.get("[data-cy=input-topping-0]").check()
    cy.get("[data-cy=input-topping-1]").check()
    cy.get("[data-cy=input-topping-2]").check()
    cy.get("[data-cy=input-topping-3]").check()
    cy.get("[data-cy=order-button]").click()
    cy.url().should('include', '/success')
  })
})