import { shallow } from 'enzyme';
import React from 'react'

import Card from './Card';


describe('Card Component', () => {
	it('should render Card', () => {
		expect(shallow(<Card />)).toMatchSnapshot();
	});
});


