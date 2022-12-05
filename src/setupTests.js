require('babel-polyfill');

import { configure } from 'enzyme/build';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import fetchMock from "jest-fetch-mock";

configure({
  adapter: new Adapter(),
});

fetchMock.enableMocks();
