/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductListPage from '../../support/pageObjects/ProductListPage'
import ProductFormPage from '../../support/pageObjects/ProductFormPage'
import CartFormPage from '../../support/pageObjects/CartFormPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

describe('E2e test suit - product checkout', () => {
    let productData;
    let loginData;
    let orderData;

    before(function () {
        cy.fixture('productData').then(function (Data1) {
            productData = Data1.product1
        })

        cy.fixture('userData').then(function (Data2) {
            loginData = Data2.user1
        })

        cy.fixture('orderData').then(function (Data3) {
            orderData = Data3.order1
        })
    })

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })

    it('First test case - verify product checkout validation', () => {
        const homePage = new HomePage()
        const productListPage = new ProductListPage()
        const productFormPage = new ProductFormPage()
        const cartFormPage = new CartFormPage()
        const checkoutPage = new CheckoutPage()

        cy.getUserLogin(loginData.email, loginData.password)

        //verify home page UI elements
        homePage.verifyHomePageElements()

        //perform search by product, verify product list page elements
        cy.performSearch(productData.value)
        productListPage.verifyProductListPageElements()

        //verify product form page elements
        productListPage.getAddToCartItems().eq(0).click({ force: true })
        productListPage.getProductItem().click({ force: true })
        productFormPage.verifyProductFormPageElements()

        //click add to cart button, verify cart form page elements
        productFormPage.getAddToCartButton().click({ force: true })
        productFormPage.getCheckoutLink().click({ force: true })
        cartFormPage.verifyCartFormPageElements()

        //click checkout button, verify checkout form page elements
        cartFormPage.getCheckoutButton().click({ force: true })
        checkoutPage.verifyCheckoutFormPageElements()

        //verify that place order is disabled
        checkoutPage.getPlaceOrderButton().should('be.disabled')

        //fill checkout address, click save and continue
        checkoutPage.fillCheckoutOrderAddress(orderData.firstName, orderData.lastName, orderData.address, orderData.zipCode, orderData.city, orderData.state, orderData.phoneNumber)
        checkoutPage.getSaveAndContinueButton().click({ force: true })

        //fill checkout payment data, click save and continue
        checkoutPage.fillCheckoutPayment(orderData.cardNumber, orderData.expireDate, orderData.cvs, orderData.nameOnCard)
        checkoutPage.getSaveAndContinueButton().click({ force: true })

        //verify that place order is not disabled, click place order button
        checkoutPage.getPlaceOrderButton().should('not.be.disabled')
        checkoutPage.getPlaceOrderButton().click()
    })
})