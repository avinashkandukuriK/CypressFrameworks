import HomePage from '../support/pageObjects/HomePage'
import ProductListPage from '../support/pageObjects/ProductListPage'
import ProductFormPage from '../support/pageObjects/ProductFormPage'
import CartFormPage from '../support/pageObjects/CartFormPage'
import LoginPage from '../support/pageObjects/LoginPage'
import CheckoutPage from '../support/pageObjects/CheckoutPage'

const homePage = new HomePage()
const productListPage = new ProductListPage()
const productFormPage = new ProductFormPage()
const cartFormPage = new CartFormPage()
const loginPage = new LoginPage()
const checkoutPage = new CheckoutPage()

Cypress.Commands.add('verifyHomePageElements', () => {
    homePage.getTitle().should('be.visible')
    homePage.getStoreMessageButton().should('be.visible')
    homePage.getSearchInput().should('be.visible')
    homePage.getSearchButton().should('be.visible')
    homePage.getCartButton().should('be.visible')
    homePage.getHeaderLinksContainer().should('be.visible')
    homePage.getLogo().should('be.visible')
})

Cypress.Commands.add('performSearch', (product) => {
    homePage.getSearchInput().type(product)
    cy.wait(5000)
    homePage.getSearchButton().click({ force: true })
})

Cypress.Commands.add('verifyProductListPageElements', () => {
    productListPage.getFacetCardsContainer().should('be.visible')
    productListPage.getResultsHeading().should('be.visible')
    productListPage.getSlotRenderer().should('be.visible')
    productListPage.getProductListGrid().should('be.visible')
    productListPage.getProductItems().should('be.visible')
})

Cypress.Commands.add('verifyProductFormPageElements', () => {
    productFormPage.getBreadcrumbContainer().should('be.visible')
    productFormPage.getProductTitle().should('be.visible')
    productFormPage.getProductCarousel().should('be.visible')
    productFormPage.getIconGeneralHeart().should('be.visible')
    productFormPage.getProductPrice().should('be.visible')
    productFormPage.getRatingFeedbackContainer().should('be.visible')
    productFormPage.getAddToCartButton().should('be.visible')
    productFormPage.getProductDetails().should('be.visible')
})

Cypress.Commands.add('verifyCartFormPageElements', () => {
    cartFormPage.getCartTitle().should('be.visible')
    cartFormPage.getCartItem().should('be.visible')
    cartFormPage.getCartSummaryTitle().should('be.visible')
    cartFormPage.getCartSummarySubTotal().should('be.visible')
    cartFormPage.getCartSummaryDelivery().should('be.visible')
    cartFormPage.getCartSummaryTaxes().should('be.visible')
    cartFormPage.getCartSummaryTotal().should('be.visible')
    cartFormPage.getCheckoutButton().should('be.visible')
})

Cypress.Commands.add('verifyCheckoutFormPageElements', () => {
    checkoutPage.getCartTitle().should('be.visible')
    checkoutPage.getPlaceOrderButton().should('be.visible')
    checkoutPage.getCartSummarySubTotal().should('be.visible')
    checkoutPage.getCartSummaryDelivery().should('be.visible')
    checkoutPage.getCartSummaryFees().should('be.visible')
    checkoutPage.getCartSummaryTotal().should('be.visible')
    checkoutPage.getCheckoutContainer().should('be.visible')
    checkoutPage.getStepShipping().should('be.visible')
    checkoutPage.getFirstName().should('be.visible')
    checkoutPage.getLastName().should('be.visible')
    checkoutPage.getAddressLine1().should('be.visible')
    checkoutPage.getZipCode().should('be.visible')
    checkoutPage.getCity().should('be.visible')
    checkoutPage.getState().should('be.visible')
    checkoutPage.getPhoneNumber().should('be.visible')
    checkoutPage.getSaveAndContinueButton().should('be.visible')
})

Cypress.Commands.add('verifyLoginPageElements', () => {
    loginPage.getEmail().should('be.visible')
    loginPage.getPassword().should('be.visible')
    loginPage.getSubmitButton().should('be.visible')
    loginPage.getForgotPassword().should('be.visible')
    loginPage.getCreateAccountButton().should('be.visible')
})

Cypress.Commands.add('verifyLoginPageRequiredElements', () => {
    loginPage.getUsernameErrorMessage().should('be.visible')
    loginPage.getPasswordErrorMessage().should('be.visible')
})

Cypress.Commands.add('getUserLogin', (email, password) => {
    homePage.getSignIn().click({ force: true })
    homePage.getAccountNavSignIn().click({ force: true })
    loginPage.getEmail().type(email)
    loginPage.getPassword().type(password)
    loginPage.getKeepMeSignedIn().click({ force: true })
    loginPage.getSubmitButton().click({ force: true })
})

Cypress.Commands.add('getCheckoutOrderAddress', (firstName, lastName, address, zipCode, city, state, phoneNumber) => {
    checkoutPage.getFirstName().type(firstName)
    checkoutPage.getLastName().type(lastName)
    checkoutPage.getAddressLine1().type(address)
    checkoutPage.getZipCode().type(zipCode)
    checkoutPage.getCity().type(city)
    checkoutPage.getState().select(state)
    checkoutPage.getPhoneNumber().type(phoneNumber)
})

Cypress.Commands.add('getCheckoutPayment', (cardNumber, expireDate, cvs, nameOnCard) => {
    checkoutPage.getFirstName().type(cardNumber)
    checkoutPage.getLastName().type(expireDate)
    checkoutPage.getAddressLine1().type(cvs)
    checkoutPage.getZipCode().type(nameOnCard)
})
