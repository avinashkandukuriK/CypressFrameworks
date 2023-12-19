class HomePage {

    elements = {
        signIn: () => cy.get('[data-test="@web/AccountLink"]'),
        accountNavSignIn: () => cy.get('[data-test="accountNav-signIn"]'),
        title: () => cy.get('h1[data-test="page-title"]'),
        storeMessageButton: () => cy.get('button[id="web-store-id-msg-btn"]'),
        accountSignIn: () => cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-diphzn-1'),
        searchInput: () => cy.get('[data-test="@web/Search/SearchInput"]'),
        searchButton: () => cy.get('[data-test="@web/Search/SearchButton"]'),
        cartButton: () => cy.get('[data-test="@web/CartLink"]'),
        headerLinksContainer: () => cy.get('.styles__UtilityHeaderLinksContainer-sc-y1hu6r-1'),
        logo: () => cy.get('.styles__LogoLinkDesktop-sc-stnda7-0 > .sc-gsnTZi > .sc-hKMtZM > svg'),
        userLoginInfo: () => cy.get('.styles__LinkText-sc-u2k6h-3')
    }

    getSignIn() {
        return this.elements.signIn()
    }

    getAccountNavSignIn() {
        return this.elements.accountNavSignIn()
    }

    getTitle() {
        return this.elements.title()
    }

    getStoreMessageButton() {
        return this.elements.storeMessageButton()
    }

    getAccountSignin() {
        return this.elements.accountSignIn()
    }

    getSearchInput() {
        return this.elements.searchInput()
    }

    getSearchButton() {
        return this.elements.searchButton()
    }

    getCartButton() {
        return this.elements.cartButton()
    }

    getHeaderLinksContainer() {
        return this.elements.headerLinksContainer()
    }

    getLogo() {
        return this.elements.logo()
    }

    getUserLoginInfo() {
        return this.elements.userLoginInfo()
    }

    verifyHomePageElements() {
        this.elements.signIn().should('be.visible')
        this.elements.storeMessageButton().should('be.visible')
        this.elements.searchInput().should('be.visible')
        this.elements.searchButton().should('be.visible')
        this.elements.cartButton().should('be.visible')
        this.elements.headerLinksContainer().should('be.visible')
        this.elements.logo().should('be.visible')
    }
}

export default HomePage;