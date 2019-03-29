import 'jsdom-global/register';
import React from 'react';

import Backdrop from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Backdrop', () => {
    let wrapper;
    const defaultProps = {
        close() {},
    };

    beforeEach(()=>{
        jest.resetAllMocks();
    });

    it('is renders show: true', () => {
        const props = {
            show: true,
        };

        wrapper = shallow(<Backdrop {...defaultProps} {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('is renders show: false', () => {
        const props = {
            show: false,
        };

        wrapper = shallow(<Backdrop {...defaultProps} {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});