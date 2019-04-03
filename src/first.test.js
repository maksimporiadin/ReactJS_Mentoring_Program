import 'jsdom-global/register';
import React from 'react';
import  App from './App';
import  Routers from './Routers';
import { shallow } from 'enzyme';

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