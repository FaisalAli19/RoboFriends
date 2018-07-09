import React from 'react'
import { shallow } from 'enzyme';

import CardList from './CardList';
import Card from '../Card/Card'

describe('CardList Component', () => {
	it('should render CardList', () => {
		let mockList = [{ id: 1, name: 'faisal', email: 'faisal@king.com'}]
		expect(shallow(<CardList robots={mockList} />)).toMatchSnapshot();
	});

	it('should render 2 Card', () => {
		let mockList = [
			{
				id: 1,
				name: 'faisal',
				email: 'faisal@king.com'
			},
			{
				id: 2,
				name: 'faisalali',
				email: 'faisalali@king.com'
			}
		]
		let wrapper = shallow(<CardList robots={mockList} />)
		expect(wrapper.find(Card).length).toEqual(2)
	});
});