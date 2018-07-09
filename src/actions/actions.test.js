import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
	CHANGE_SEARCH_FILED,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS
} from '../constants/constants'

import { setSearchField, requestsRobots } from './actions';

const mockStore = configureMockStore([thunkMiddleware])

const mockResponse = (status, statusText, response) => {
	return new window.Response(response, {
		status: status,
		statusText: statusText,
		headers: {
			'Content-type': 'application/json'
		}
	});
};

describe('setSearchField actions', () => {
	it('should create an action to search robots', () => {
		const text = 'Wooo';
		const expectedAction = {
			type: CHANGE_SEARCH_FILED,
			payload: text
		};
		expect(setSearchField(text)).toEqual(expectedAction)
	});
});

describe('requestsRobots actions', () => {
	afterEach(() => {
		fetchMock.reset(),
		fetchMock.restore()
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		const store = mockStore();
		store.dispatch(requestsRobots())
		const action = store.getActions()
		const expectedAction = { type: REQUEST_ROBOTS_PENDING };
		expect(action[0]).toEqual(expectedAction)
	});

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		const store = mockStore();
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, null, '["do something"]')))
		const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: ['do something'] }
		]

		return store.dispatch(requestsRobots()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	});
});
