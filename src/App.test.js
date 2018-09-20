import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import Enzyme, { shallow, mount } from 'enzyme';

// app = shallow(
//   <Router>
//       <App />
//   </Router>);
  
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Router>
        <App />
    </Router>), div);
  ReactDOM.unmountComponentAtNode(div);
});
