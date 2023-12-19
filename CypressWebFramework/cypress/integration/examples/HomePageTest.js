/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductListPage from '../../support/pageObjects/ProductListPage'

describe('Test suit - home page', () => {
    let data;

    before(function () {
        cy.fixture('productData').then(function (Data) {
            data = Data
        })
    })

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })


    it('First test case - verify home page ui elements', () => {
        const homePage = new HomePage()

        //verify home page UI elements
        homePage.verifyHomePageElements()
    })

    it('Second test case - verify search product functionality', () => {
        const homePage = new HomePage()
        const productListPage = new ProductListPage()

        //verify home page UI elements
        homePage.verifyHomePageElements()

        //perform search by product, verify product list page elements
        cy.performSearch(data.product1.value)
        productListPage.verifyProductListPageElements()

        //verify that product titles are correspond to the search product
        productListPage.getProductTitles().each(($el, index, $list) => {
            const productTitle = $el.text()
            expect(productTitle.includes(data.product1.searchKey1, data.product1.searchKey2)).to.be.true
        }).then(($list) => {
            expect($list).to.have.length(3)
        })
    })
})