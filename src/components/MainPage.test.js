import React from 'react'
import { shallow } from 'enzyme';

import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}

	wrapper = shallow(<MainPage {...mockProps} />)
})

describe('MainPage Component', () => {
	it('should render MainPage', () => {
		expect(wrapper).toMatchSnapshot()
	});

	it('should filters robots correctly', () => {
		expect(wrapper.instance().filterRobots()).toEqual([])
	});

	it('should filter 1 robots', () => {
		const mockProps = {
			onRequestRobots: jest.fn(),
			robots: [{id: 1, name: 'faisal', email: 'faisal@king.com'}],
			searchField: 'faisal',
			isPending: false
		}
		let wrapper = shallow(<MainPage {...mockProps} />)
		expect(wrapper.instance().filterRobots()).toEqual([{id: 1, name: 'faisal', email: 'faisal@king.com'}])
	});

	it('should filter empty array', () => {
		const mockProps = {
			onRequestRobots: jest.fn(),
			robots: [{id: 1, name: 'faisal', email: 'faisal@king.com'}],
			searchField: 'ravi',
			isPending: false
		}
		let wrapper = shallow(<MainPage {...mockProps} />)
		expect(wrapper.instance().filterRobots()).toEqual([])
	});
});