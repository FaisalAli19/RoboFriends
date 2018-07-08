import React from 'react'
import { shallow } from 'enzyme';

import SearchBox from './SearchBox';

describe('SearchBox Component', () => {
	it('should render properly', () => {
		expect(shallow(<SearchBox />)).toMatchSnapshot();
	});
});