/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'

describe('E2e test suit - user login', () => {
    let loginData;

    before(function () {
        cy.fixture('userData').then(function (data) {
            loginData = data.user1
        })
    })

    beforeEach(function () {
        cy.visit(Cypress.env('url') + "/account")
    })

    it('First test case - verify login validation', () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()

        loginPage.verifyLoginPageElements()

        //put empty data and verify required fields displaying
        loginPage.getSubmitButton().click({ force: true })
        loginPage.getUsernameErrorMessage()
            .should('exist')
            .contains('Please enter an email or phone number')

        loginPage.getPasswordErrorMessage()
            .should('exist')
            .contains('Please enter your password')

        //put correct data and verify user name displayed correctly on sign in
        loginPage.getEmail().type(loginData.email)
        loginPage.getPassword().type(loginData.password)
        loginPage.getKeepMeSignedIn().click({ force: true })
        loginPage.getSubmitButton().click({ force: true })
        homePage.getUserLoginInfo().then(function (element) {
            const loginText = element.text()
            expect(loginText.includes(loginData.userName)).to.be.true
        })
    })
})