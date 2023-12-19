/// <reference types = "Cypress" />

import APIResources from '../../support/APIResources/apiResources'
const dataJson = require('../../fixtures/createuser')

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

    it('create user request', () => {
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
            cy.log("user id is: " + userId)

            //2.get user (GET) and verfy that the user with the data from payload
            cy.request({
                method: 'GET',
                url: apiResources.userElementsAPI.getUsers + userId,
                headers: {
                    'Authorization': "Bearer " + accessToken
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', userId)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('status', payload.status)
                expect(res.body).has.property('email', testEmail)
            })

            //3.update user (PUT) by adding new for the name, email and by switching the gender and status
            cy.request({
                method: 'PUT',
                url: apiResources.userElementsAPI.putUser + userId,
                headers: {
                    'Authorization': "Bearer " + accessToken
                },
                body: {
                    "name": 'new' + payload.name,
                    "email": 'new' + testEmail,
                    "gender": payload.gender === 'female' ? 'male' : 'female',
                    "status": payload.status === 'active' ? 'inactive' : 'active'
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', userId)
                expect(res.body).has.property('name', 'new' + payload.name)
                expect(res.body).has.property('gender', payload.gender === 'female' ? 'male' : 'female')
                expect(res.body).has.property('status', payload.status === 'active' ? 'inactive' : 'active')
                expect(res.body).has.property('email', 'new' + testEmail)
            })

            //4.get user (GET) and verfy that the user now with the updated data
            cy.request({
                method: 'GET',
                url: apiResources.userElementsAPI.getUsers + userId,
                headers: {
                    'Authorization': "Bearer " + accessToken
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', userId)
                expect(res.body).has.property('name', 'new' + payload.name)
                expect(res.body).has.property('gender', payload.gender === 'female' ? 'male' : 'female')
                expect(res.body).has.property('status', payload.status === 'active' ? 'inactive' : 'active')
                expect(res.body).has.property('email', 'new' + testEmail)
            })

            //5.delete user (DELETE)
            cy.request({
                method: 'DELETE',
                url: apiResources.userElementsAPI.deleteUser + userId,
                headers: {
                    'Authorization': "Bearer " + accessToken
                },
            }).then((res) => {
                expect(res.status).to.eq(204)
            })

            //6.verify user deleted (GET) successfully
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