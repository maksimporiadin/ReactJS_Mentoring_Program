import 'jsdom-global/register';
import React from 'react';
import Modal  from './index';
import { shallow } from 'enzyme';

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