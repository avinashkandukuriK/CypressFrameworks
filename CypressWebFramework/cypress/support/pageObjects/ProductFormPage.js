class ProductFormPage {

    elements = {
        breadcrumbContainer: () => cy.get('[data-test="@web/Breadcrumb/Container"]'),
        productTitle: () => cy.get('[data-test="product-title"]'),
        productCarousel: () => cy.get('section[data-test="product-carousel"]'),
        iconGeneralHeart: () => cy.get('span[data-test="IconGeneralHeartOutline"]'),
        productPrice: () => cy.get('span[data-test="product-price"]'),
        ratingFeedbackContainer: () => cy.get('div[data-test="ratingFeedbackContainer"]'),
        addToCartButton: () => cy.get('button[data-test="shippingButton"]'),
        productDetails: () => cy.get('div[id="product-detail-tabs"]'),
        checkoutLink: () => cy.contains('View cart & check out')
    }

    getBreadcrumbContainer() {
        return this.elements.breadcrumbContainer()
    }

    getProductTitle() {
        return this.elements.productTitle()
    }

    getProductCarousel() {
        return this.elements.productCarousel()
    }

    getIconGeneralHeart() {
        return this.elements.iconGeneralHeart()
    }

    getProductPrice() {
        return this.elements.productPrice()
    }

    getRatingFeedbackContainer() {
        return this.elements.ratingFeedbackContainer()
    }

    getAddToCartButton() {
        return this.elements.addToCartButton()
    }

    getProductDetails() {
        return this.elements.productDetails()
    }

    getCheckoutLink() {
        return this.elements.checkoutLink()
    }

    verifyProductFormPageElements() {
        this.elements.breadcrumbContainer().should('be.visible')
        this.elements.productTitle().should('be.visible')
        this.elements.productCarousel().should('be.visible')
        this.elements.iconGeneralHeart().should('be.visible')
        this.elements.productPrice().should('be.visible')
        this.elements.ratingFeedbackContainer().should('be.visible')
        this.elements.addToCartButton().should('be.visible')
        this.elements.productDetails().should('be.visible')
    }
}

export default ProductFormPage;