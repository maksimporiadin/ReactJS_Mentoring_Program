import 'jsdom-global/register';
import React from 'react';
import MoviesInform from './index';
import { shallow } from 'enzyme';

describe('MoviesInform', () => {
    let wrapper;

    it('is renders count 0', () => {
        const props = {
            count: 0
        };
        wrapper = shallow(<MoviesInform {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('is renders count 1', () => {
        const props = {
            count: 1
        };
        wrapper = shallow(<MoviesInform {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('is renders count default', () => {
        const props = {
            count: 3
        };
        wrapper = shallow(<MoviesInform {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});