import 'jsdom-global/register';
import React from 'react';

import MoviePage from './MoviePage';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

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