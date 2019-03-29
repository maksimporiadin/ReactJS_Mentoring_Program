import 'jsdom-global/register';
import React from 'react';

import  App from './App';
import  Routers from './Routers';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe( 'Sample test', function () {
    let wrapper;

    it('App test ', () => {
        wrapper = shallow(<App  />);
        expect(wrapper).toHaveLength(1);
    })

    it('Routers test', () => {
        wrapper = shallow(<Routers />);
        expect(wrapper).toHaveLength(1);
    })
});