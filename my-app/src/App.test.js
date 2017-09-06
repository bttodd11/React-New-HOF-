import React from 'react';
import ReactDOM from 'react-dom';
import Update from './Update';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Update />, div);
});
