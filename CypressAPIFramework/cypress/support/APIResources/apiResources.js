class APIResources {

    userAccessElements = {
        accessToken: 'XXX'
    }

    userElementsAPI = {
        getUsers: 'https://gorest.co.in/public/v2/users/',
        postUser: 'https://gorest.co.in/public/v2/users/',
        putUser: 'https://gorest.co.in/public/v2/users/',
        deleteUser: 'https://gorest.co.in/public/v2/users/',
    }

    userResourceMessages = {
        resourceNotFound: 'Resource not found'
    }

    weatherAccessElements = {
        rapidAPIKey: 'XXX',
        rapidAPIHost: 'yahoo-weather5.p.rapidapi.com'
    }

    weatherElementsAPI = {
        getWeatherByLocation: 'https://yahoo-weather5.p.rapidapi.com/weather?location=',
    }

    weatherRequestElements = {
        rapidAPIKey: 'XXX',
        rapidAPIHost: 'yahoo-weather5.p.rapidapi.com'
    }

    interceptionElementsAPI = {
        baseUrl: ' https://jsonplaceholder.typicode.com/'
    }

}

export default APIResources;