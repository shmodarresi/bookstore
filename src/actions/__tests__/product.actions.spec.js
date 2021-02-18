import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../product.actions'
import * as types from '../../constants/product.constants'
import nock from 'nock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const data = 
    {
        "id": 9781593275846,
        "title": "Eloquent JavaScript, Second Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "published": "2014-12-14T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 472,
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website": "http://eloquentjavascript.net/",
        "price": 20,
        "quant": 5,
        "image": "/images/9781593275846"
      }
    

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates GET-PRODUCT has been done', () => {
    nock('../../../db.json')
      .get('/books/9781593275846')
      .reply(200, { data: data })

    const expectedActions = [
      { type: types.productConstants.GET_REQUEST },
      { type: types.productConstants.GET_SUCCESS, book: data },
      { type: types.productConstants.GET_FAILURE, error: undefined },
    ]
    const store = mockStore({ book: {} })

    return store.dispatch(actions.getProduct('9781593275846')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})