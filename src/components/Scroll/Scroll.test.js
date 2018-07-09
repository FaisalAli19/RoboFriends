import React from 'react';
import { shallow, mount } from 'enzyme'

import Scroll from './Scroll';
import CardList from '../CardList/CardList'

describe('Scroll Component', () => {
	it('should render correctly', () => {
		expect(shallow(<Scroll />)).toMatchSnapshot()
	});
	it('should render is loading', () => {
		let wrapper = mount(<Scroll isPending={true} />)
		expect(wrapper.find('.loading').length).toEqual(1)
	});
});