import React from 'react'
import { shallow } from 'enzyme';

import CardList from './CardList';

describe('CardList Component', () => {
	it('should render CardList', () => {
		let mockList = [{ id: 1, name: 'faisal', email: 'faisal@king.com'}]
		expect(shallow(<CardList robots={mockList} />)).toMatchSnapshot();
	});
});