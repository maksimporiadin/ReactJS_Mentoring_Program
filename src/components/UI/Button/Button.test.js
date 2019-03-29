import 'jsdom-global/register';
import React from 'react';

import { Button } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Button', () => {
    let wrapper;
    const defaultProps = {
        className: 'title',
        disabled: true,
        onClick() {},
        name: 'name'
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Button {...defaultProps} />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});