import 'jsdom-global/register';
import React from 'react';

import SearchParam from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('SearchParam', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<SearchParam  />)
        expect(wrapper).toHaveLength(1);
    });
});