/// <reference types = "Cypress" />

import APIResources from '../../support/APIResources/apiResources'

describe('get weather api test by location', () => {

    const apiResources = new APIResources()
    let rapidAPIKey = apiResources.weatherAccessElements.rapidAPIKey
    let rapidAPIHost = apiResources.weatherAccessElements.rapidAPIHost
    let payload;

    before(function () {
        cy.fixture('weatherLocations').then(function (payloadData) {
            payload = payloadData
        })
    })

    it('get weather information for location', () => {
        cy.request({
            method: 'GET',
            url: apiResources.weatherElementsAPI.getWeatherByLocation + payload.location1.city,
            headers: {
                'X-RapidAPI-Key': rapidAPIKey,
                'X-RapidAPI-Host': rapidAPIHost
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            const cityName = resp.body.location.city
            return cityName
        }).then((cityName) => {
            cy.request({
                method: 'GET',
                url: apiResources.weatherElementsAPI.getWeatherByLocation + cityName,
                headers: {
                    'X-RapidAPI-Key': rapidAPIKey,
                    'X-RapidAPI-Host': rapidAPIHost
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                expect(resp.body.location).to.have.property('city', payload.location1.city)
                expect(resp.body.location).to.have.property('region', payload.location1.region)
                expect(resp.body.location).to.have.property('country', payload.location1.country)
                expect(resp.body.location).to.have.property('timezone_id', payload.location1.timezone_id)
                expect(resp.body.forecasts).not.be.empty
                expect(resp.body.current_observation).not.be.empty
            })
        })
    })

    it('get weather forcast for city', () => {
        cy.request({
            method: 'GET',
            url: apiResources.weatherElementsAPI.getWeatherByLocation + payload.location2.city,
            headers: {
                'X-RapidAPI-Key': rapidAPIKey,
                'X-RapidAPI-Host': rapidAPIHost
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.location).to.have.property('city', payload.location2.city)
            expect(resp.body.location).to.have.property('region', payload.location2.region)
            expect(resp.body.location).to.have.property('country', payload.location2.country)
            expect(resp.body.location).to.have.property('timezone_id', payload.location2.timezone_id)
            expect(resp.body.forecasts).not.be.empty
            const forecasts = resp.body.forecasts

            //check that forecast has data for 12 upcoming days
            for (let i = 0; i < forecasts.length; i++) {
                expect(resp.body.forecasts[i].day).not.be.empty
                expect(resp.body.forecasts[i].date).not.to.be.null
                expect(resp.body.forecasts[i].low).not.to.be.null
                expect(resp.body.forecasts[i].high).not.to.be.null
                expect(resp.body.forecasts[i].text).not.be.empty
                expect(resp.body.forecasts[i].code).not.to.be.null
            }
        })
    })

    it('get current weather observation for city', () => {
        cy.request({
            method: 'GET',
            url: apiResources.weatherElementsAPI.getWeatherByLocation + payload.location3.city,
            headers: {
                'X-RapidAPI-Key': rapidAPIKey,
                'X-RapidAPI-Host': rapidAPIHost
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body.location).to.have.property('city', payload.location3.city)
            expect(resp.body.location).to.have.property('region', payload.location3.region)
            expect(resp.body.location).to.have.property('country', payload.location3.country)
            expect(resp.body.location).to.have.property('timezone_id', payload.location3.timezone_id)
            expect(resp.body.forecasts).not.be.empty

            //check that wind, atmosphere, astronomy, condition not empty
            expect(resp.body.current_observation.wind).not.be.empty
            expect(resp.body.current_observation.atmosphere).not.be.empty
            expect(resp.body.current_observation.astronomy).not.be.empty
            expect(resp.body.current_observation.condition).not.be.empty
        })
    })

})

