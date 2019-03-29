import 'jsdom-global/register';
import React from 'react';

import Modal  from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Modal', () => {
    let wrapper;
    const defaultProps = {
        closeModal() {},
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Modal />);
    });

    it('is renders with show: true', () => {
        const props = {
            show: true
        };
        wrapper = shallow(<Modal {...defaultProps} {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('is renders with show: false', () => {
        const props = {
            show: false
        };
        wrapper = shallow(<Modal {...defaultProps} {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});