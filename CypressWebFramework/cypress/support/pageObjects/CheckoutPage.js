class CheckoutPage {

    elements = {
        cartTitle: () => cy.get('#checkout-header'),
        placeOrderButton: () => cy.get('[data-test="placeOrderButton"]'),
        cartSummarySubTotal: () => cy.get('[data-test="cart-summary-subTotal"]'),
        cartSummaryDelivery: () => cy.get('[data-test="cart-summary-delivery"]'),
        cartSummaryFees: () => cy.get('[data-test="cart-summary-fees"]'),
        cartSummaryTotal: () => cy.get('[data-test="cart-summary-total"]'),
        checkoutContainer: () => cy.get(':nth-child(2) > .Grid__StyledGrid-sc-1vq3yub-0'),
        stepShipping: () => cy.get('#STEP_SHIPPING'),
        firstName: () => cy.get('#first_name'),
        lastName: () => cy.get('#last_name'),
        addressLine1: () => cy.get('[data-test="@web/TypeaheadInput/Input"]'),
        zipCode: () => cy.get('#zip_code'),
        city: () => cy.get('#city'),
        state: () => cy.get('#state'),
        phoneNumber: () => cy.get('#phone_number'),
        saveAndContinueButton: () => cy.get('[data-test="primary-save-button"]'),
        cardNumber: () => cy.get('#credit-card-number-input'),
        expireDate: () => cy.get('#credit-card-expiration-input'),
        cvs: () => cy.get('#credit-card-cvv-input'),
        nameOnCard: () => cy.get('#credit-card-name-input')
    }

    getCartTitle() {
        return this.elements.cartTitle()
    }

    getPlaceOrderButton() {
        return this.elements.placeOrderButton()
    }

    getCartSummarySubTotal() {
        return this.elements.cartSummarySubTotal()
    }

    getCartSummaryDelivery() {
        return this.elements.cartSummaryDelivery()
    }

    getCartSummaryFees() {
        return this.elements.cartSummaryFees()
    }

    getCartSummaryTotal() {
        return this.elements.cartSummaryTotal()
    }

    getCheckoutContainer() {
        return this.elements.checkoutContainer()
    }

    getStepShipping() {
        return this.elements.stepShipping()
    }

    getFirstName() {
        return this.elements.firstName()
    }

    getLastName() {
        return this.elements.lastName()
    }

    getAddressLine1() {
        return this.elements.addressLine1()
    }

    getZipCode() {
        return this.elements.zipCode()
    }

    getCity() {
        return this.elements.city()
    }

    getState() {
        return this.elements.state()
    }

    getPhoneNumber() {
        return this.elements.phoneNumber()
    }

    getSaveAndContinueButton() {
        return this.elements.saveAndContinueButton()
    }

    verifyCheckoutFormPageElements() {
        this.elements.cartTitle().should('be.visible')
        this.elements.placeOrderButton().should('be.visible')
        this.elements.cartSummarySubTotal().should('be.visible')
        this.elements.cartSummaryDelivery().should('be.visible')
        this.elements.cartSummaryTotal().should('be.visible')
        this.elements.checkoutContainer().should('be.visible')
        this.elements.stepShipping().should('be.visible')
        this.elements.firstName().should('be.visible')
        this.elements.lastName().should('be.visible')
        this.elements.addressLine1().should('be.visible')
        this.elements.zipCode().should('be.visible')
        this.elements.city().should('be.visible')
        this.elements.state().should('be.visible')
        this.elements.phoneNumber().should('be.visible')
        this.elements.saveAndContinueButton().should('be.visible')
    }

    fillCheckoutOrderAddress(firstName, lastName, address, zipCode, city, state, phoneNumber) {
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
        this.elements.addressLine1().type(address)
        this.elements.zipCode().type(zipCode)
        this.elements.city().type(city)
        this.elements.state().select(state)
        this.elements.phoneNumber().type(phoneNumber)
    }

    fillCheckoutPayment(cardNumber, expireDate, cvs, nameOnCard) {
        this.elements.cardNumber().type(cardNumber)
        this.elements.expireDate().type(expireDate)
        this.elements.cvs().type(cvs)
        this.elements.nameOnCard().type(nameOnCard)
    }

}

export default CheckoutPage;