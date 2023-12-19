/// <reference types = "Cypress" />

const dataJson = require('../../fixtures/createuser')
import APIResources from '../../support/APIResources/apiResources'

describe('post user request', () => {

    const apiResources = new APIResources()
    let accessToken = apiResources.userAccessElements.accessToken

    let randomText = ""
    let testEmail = ""
    let payload;
    let userId;


    before(function () {
        cy.fixture('createuser').then(function (payloadData) {
            payload = payloadData
        })
    })

    it.only('create user request', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
            testEmail = randomText + '@gmail.com'
        }

        //1. create user (POST)
        cy.request({
            method: 'POST',
            url: apiResources.userElementsAPI.postUser,
            headers: {
                'Authorization': "Bearer " + accessToken
            },
            body: {
                "name": payload.name,
                "email": testEmail,
                "gender": payload.gender,
                "status": payload.status
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email', testEmail)
            expect(res.body).has.property('name', payload.name)
            userId = res.body.id

            //2.delete user (DELETE)
            cy.request({
                method: 'DELETE',
                url: apiResources.userElementsAPI.deleteUser + userId,
                headers: {
                    'Authorization': "Bearer " + accessToken
                },
            }).then((res) => {
                expect(res.status).to.eq(204)
            })

            //3.verify user deleted (GET) successfully
            cy.request({
                method: 'GET',
                url: apiResources.userElementsAPI.getUsers + userId,
                headers: {
                    'Authorization': "Bearer " + accessToken
                },
                failOnStatusCode: false
            }).then((res) => {
                expect(res.status).to.eq(404)
                expect(res.body).has.property('message', apiResources.userResourceMessages.resourceNotFound)
            })
        })
    })

})