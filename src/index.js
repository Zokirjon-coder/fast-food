import React from 'react';
import ReactDOM from 'react-dom';
import MahsulotlarContext from './context/maxsulotlar/MahsulotlarContext';
import './index.css';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <MahsulotlarContext>
      <Root />
    </MahsulotlarContext>
  </React.StrictMode>,
  document.getElementById('root')
);