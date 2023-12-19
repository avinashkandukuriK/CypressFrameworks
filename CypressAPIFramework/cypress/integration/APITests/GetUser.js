/// <reference types = "Cypress" />
import APIResources from '../../support/APIResources/apiResources'

describe('get api user tests', () => {

    const apiResources = new APIResources()
    let accessToken = apiResources.userAccessElements.accessToken

    it.only('get users', () => {
        cy.request({
            method: 'GET',
            url: apiResources.userElementsAPI.getUsers,
            headers: {
                'Authorization': "Bearer " + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    })

    it('get user bi id', () => {
        cy.request({
            method: 'GET',
            url: apiResources.userElementsAPI.getUsers + '3904',
            headers: {
                'Authorization': "Bearer " + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(3904)
            expect(res.body.name).to.eq('Arya Kaul')
        })
    })
})