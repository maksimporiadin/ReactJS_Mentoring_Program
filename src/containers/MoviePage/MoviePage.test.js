import 'jsdom-global/register';
import React from 'react';
import MoviePage from './MoviePage';
import { shallow } from 'enzyme';

describe('MoviePage', () => {
    let wrapper;
    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<MoviePage />)
        jest.useFakeTimers();
    });

    it('is renders', () => {
        jest.runAllTimers();
        expect(wrapper).toMatchSnapshot();
    });
});