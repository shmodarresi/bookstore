import React from 'react';
import {shallow} from 'enzyme';
import App from '../App.tsx';

it("renders without crashing", () => {
  shallow(<App />);
});