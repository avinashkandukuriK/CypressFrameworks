/// <reference types = "Cypress" />

import APIResources from '../../support/APIResources/apiResources'

describe('intercept with cypress', () => {
    const apiResources = new APIResources()

    it('test api with intercept stubbing', () => {
        cy.visit(apiResources.interceptionElementsAPI.baseUrl)
        cy.intercept({
            path: '/posts'
        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })

    //mocking up for /posts API with static fake response for further usage
    it.only('mocking with intercept test with static response', () => {
        cy.visit(apiResources.interceptionElementsAPI.baseUrl)
        cy.intercept('GET', 'posts', { totalpost: 5, name: 'mockup' }).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
        cy.get('pre').should('have.text', '{"totalpost":5,"name":"mockup"}')

    })

    //mocking up for /posts API with dynamic fake response from fixtures for further usage
    it('mocking with intercept test with dynamic fixture', () => {
        cy.visit(apiResources.interceptionElementsAPI.baseUrl)
        cy.intercept('GET', 'posts', { fixture: 'createuser.json' }).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })

    //mocking up for /posts API with dynamic fake response with send fixtures for further usage
    it('mocking with intercept test with dynamic fixture json', () => {
        cy.visit(apiResources.interceptionElementsAPI.baseUrl)
        cy.intercept('GET', '/posts', (req) => {
            req.reply((res) => {
                res.send({ fixture: 'createuser.json' })
            })
        })
    })
})

