class CartFormPage {

    elements = {
        cartTitle: () => cy.get('.h-margin-l-x2 > .Heading__StyledHeading-sc-1ihrzmk-0'),
        cartItem: () => cy.get('[data-test="cartItem"]'),
        cartSummaryTitle: () => cy.get('[data-test="cart-summary-title"]'),
        cartSummarySubTotal: () => cy.get('[data-test="cart-summary-subTotal"]'),
        cartSummaryDelivery: () => cy.get('[data-test="cart-summary-delivery"]'),
        cartSummaryTaxes: () => cy.get('[data-test="cart-summary-taxes"]'),
        cartSummaryTotal: () => cy.get('[data-test="cart-summary-total"]'),
        checkoutButton: () => cy.get('[data-test="checkout-button"]')
    }

    getCartTitle() {
        return this.elements.cartTitle()
    }

    getCartItem() {
        return this.elements.cartItem()
    }

    getCartSummaryTitle() {
        return this.elements.cartSummaryTitle()
    }

    getCartSummarySubTotal() {
        return this.elements.cartSummarySubTotal()
    }

    getCartSummaryDelivery() {
        return this.elements.cartSummaryDelivery()
    }

    getCartSummaryTaxes() {
        return this.elements.cartSummaryTaxes()
    }

    getCartSummaryTotal() {
        return this.elements.cartSummaryTotal()
    }

    getCheckoutButton() {
        return this.elements.checkoutButton()
    }

    verifyCartFormPageElements() {
        this.elements.cartTitle().should('be.visible')
        this.elements.cartItem().should('be.visible')
        this.elements.cartSummaryTitle().should('be.visible')
        this.elements.cartSummarySubTotal().should('be.visible')
        this.elements.cartSummaryDelivery().should('be.visible')
        this.elements.cartSummaryTaxes().should('be.visible')
        this.elements.cartSummaryTotal().should('be.visible')
        this.elements.checkoutButton().should('be.visible')
    }
}

export default CartFormPage;