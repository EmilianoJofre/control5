import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import router from '../../../src/routes/index'
import moviesActions from '../../../src/actions/movies/movies'

describe('GET /api/movies/:name', () => {

    beforeEach(() => {
        sinon.restore() 
    })

    test('test1', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns(getFirstMovie())
        const response = await request(app.callback()).get('/api/movies/First Love')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getFirstMovie())
    } )
    test('test2', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns(getSlamMovie())
        const response = await request(app.callback()).get('/api/movies/Slam')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getSlamMovie())
    } )
    

})

function getSlamMovie(){
    return [{
        "Title": "Slam",
        "US Gross": 1009819,
        "Worldwide Gross": 1087521,
        "US DVD Sales": null,
        "Production Budget": 1000000,
        "Release Date": "Oct 09 1998",
        "MPAA Rating": "R",
        "Running Time min": null,
        "Distributor": "Trimark",
        "Source": "Original Screenplay",
        "Major Genre": "Drama",
        "Creative Type": "Contemporary Fiction",
        "Director": null,
        "Rotten Tomatoes Rating": 62,
        "IMDB Rating": 3.4,
        "IMDB Votes": 165
    }]
}

function getFirstMovie(){
    return [
        {
            "Title": "First Love, Last Rites",
            "US Gross": 10876,
            "Worldwide Gross": 10876,
            "US DVD Sales": null,
            "Production Budget": 300000,
            "Release Date": "Aug 07 1998",
            "MPAA Rating": "R",
            "Running Time min": null,
            "Distributor": "Strand",
            "Source": null,
            "Major Genre": "Drama",
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": 6.9,
            "IMDB Votes": 207
        }
    ]
}
