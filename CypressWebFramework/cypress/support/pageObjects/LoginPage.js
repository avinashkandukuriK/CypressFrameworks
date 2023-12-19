class LoginPage {

    visit() {
        cy.visit(Cypress.env('url') + "/account")
    }

    elements = {
        email: () => cy.get('#username'),
        password: () => cy.get('#password'),
        keepMeSignedIn: () => cy.get('#keepMeSignedIn'),
        submitButton: () => cy.get('#login'),
        forgotPassword: () => cy.get('#recoveryPassword'),
        createAccountButton: () => cy.get('#createAccount'),
        usernameErrorMessage: () => cy.get('#username--ErrorMessage'),
        passwordErrorMessage: () => cy.get('#password--ErrorMessage'),
        authAlertDisplay: () => cy.get('[data-test="authAlertDisplay"]')
    }

    getEmail() {
        return this.elements.email()
    }

    getPassword() {
        return this.elements.password()
    }

    getKeepMeSignedIn() {
        return this.elements.keepMeSignedIn()
    }

    getSubmitButton() {
        return this.elements.submitButton()
    }

    getForgotPassword() {
        return this.elements.forgotPassword()
    }

    getCreateAccountButton() {
        return this.elements.createAccountButton()
    }

    getUsernameErrorMessage() {
        return this.elements.usernameErrorMessage()
    }

    getPasswordErrorMessage() {
        return this.elements.passwordErrorMessage()
    }

    getAuthAlertDisplay() {
        return this.elements.authAlertDisplay()
    }

    verifyLoginPageRequiredElements() {
        this.elements.usernameErrorMessage().should('exist')
            .contains('Please enter an email or phone number');
        this.elements.passwordErrorMessage().should('exist')
            .contains('Please enter your password')
    }

    verifyLoginPageElements() {
        this.elements.email().should('be.visible')
        this.elements.password().should('be.visible')
        this.elements.submitButton().should('be.visible')
        this.elements.forgotPassword().should('be.visible')
        this.elements.createAccountButton().should('be.visible')
    }

}

export default LoginPage;