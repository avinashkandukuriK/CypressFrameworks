/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductListPage from '../../support/pageObjects/ProductListPage'
import ProductFormPage from '../../support/pageObjects/ProductFormPage'

describe('E2e test suit - product form', () => {
    let data;
    before(function () {
        cy.fixture('productData').then(function (fData) {
            data = fData
        })
    })

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })

    it('First test case - product form validation', () => {
        const homePage = new HomePage()
        const productListPage = new ProductListPage()
        const productFormPage = new ProductFormPage()

        //verify home page UI elements
        homePage.verifyHomePageElements()

        //perform search by product, verify product list page elements 
        cy.performSearch(data.product1.value)
        productListPage.verifyProductListPageElements()

        //verify product form page elements
        productListPage.getAddToCartItems().eq(0).click({ force: true })
        productListPage.getProductItem().click({ force: true })
        productFormPage.verifyProductFormPageElements()
    })
})