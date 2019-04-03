import 'jsdom-global/register';
import React from 'react';
import { NotFound } from './index';
import { shallow } from 'enzyme';

describe('NotFound', () => {
    let wrapper;

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<NotFound />);
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});