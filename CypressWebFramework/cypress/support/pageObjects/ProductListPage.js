class ProductListPage {

    elements = {
        facetCardsContainer: () => cy.get('[data-test="facetCardsContainer"]'),
        resultsHeading: () => cy.get('[data-test="resultsHeading"]'),
        slotRenderer: () => cy.get('[data-test="@web/SlotRenderer"]'),
        productListGrid: () => cy.get('.styles__ProductListGridFadedLoading-sc-u8zdb1-0'),
        productItems: () => cy.get('div[data-test="@web/ProductCard/ProductCardVariantDefault"]'),
        productItem: () => cy.get('.styles__PrimaryImage-sc-aajqid-1 > .AspectRatio__AspectRatioContainer-sc-1c5hpa0-0 > .AspectRatio__AspectRatioChildren-sc-1c5hpa0-1 > div > .styles__FadeInPicture-sc-12vb1rw-0 > img'),
        productTitle: () => cy.get('[data-test="product-title"]'),
        addToCartItems: () => cy.get('[data-test="chooseOptionsButton"]')
    }

    getFacetCardsContainer() {
        return this.elements.facetCardsContainer()
    }

    getResultsHeading() {
        return this.elements.resultsHeading()
    }

    getSlotRenderer() {
        return this.elements.slotRenderer()
    }

    getProductListGrid() {
        return this.elements.productListGrid()
    }

    getProductItems() {
        return this.elements.productItems()
    }

    getProductItem() {
        return this.elements.productItem()
    }

    getAddToCartItems() {
        return this.elements.addToCartItems()
    }

    getProductTitles() {
        return this.elements.productTitle()
    }

    verifyProductListPageElements() {
        this.elements.facetCardsContainer().should('be.visible')
        this.elements.resultsHeading().should('be.visible')
        this.elements.slotRenderer().should('be.visible')
        this.elements.productListGrid().should('be.visible')
        this.elements.productItems().should('be.visible')
    }
}

export default ProductListPage;