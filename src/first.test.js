import 'jsdom-global/register';
import React from 'react';

import  App from './App';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe( 'Sample test', function () {
    it('1+1 test', function () {
        expect(2 + 2).toBe(4);
    })

    it('shallow test', () => {
        shallow(<App />);
    })
});