import 'jsdom-global/register';
import React from 'react';

import MoviesInform from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('MoviesInform', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<MoviesInform  />);
        expect(wrapper).toHaveLength(1);
    });
});