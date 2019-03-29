import 'jsdom-global/register';
import React from 'react';

import { Spinner } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Spinner', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<Spinner  />);
        expect(wrapper).toHaveLength(1);
    });
});