import {
	CHANGE_SEARCH_FILED,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS
} from './constants';

import { setSearchField, requestsRobots } from './actions'

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialSearch = {
		searchField: ''
	}
	it('should return initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
	});

	it('should handle CHANGE_SEARCH_FILED', () => {
		let action = setSearchField('abc')
		expect(reducers.searchRobots(initialSearch, action)).toEqual({ searchField: 'abc' })
	});
});

describe('requestsRobots', () => {
	const initialRobots = {
		isPending: false,
		error: '',
		robots: []
	}

	it('should return initial state', () => {
		expect(reducers.requestsRobots(undefined, {})).toEqual(initialRobots)
	});

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestsRobots(initialRobots, { type: REQUEST_ROBOTS_PENDING }))
			.toEqual({...initialRobots, isPending: true})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		let robots = [{ id: 1 }]
		let action = { type: REQUEST_ROBOTS_SUCCESS, payload: robots }
		expect(reducers.requestsRobots(initialRobots, action))
			.toEqual({ ...initialRobots, robots, isPending: false })
	})

		it('should handle REQUEST_ROBOTS_FAILED', () => {
		let error = 'Something went wrong'
		let action = { type: REQUEST_ROBOTS_FAILED, payload: error }
		expect(reducers.requestsRobots(initialRobots, action))
			.toEqual({ ...initialRobots, error, isPending: false })
	})
});