import 'jsdom-global/register';
import React from 'react';

import { Input } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Input', () => {
    let wrapper;
    const defaultProps = {
        className: 'title',
        inputConfig: {},
        onChange() {},
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Input {...defaultProps} />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});