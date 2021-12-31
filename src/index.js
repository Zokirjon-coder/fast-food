import React from 'react';
import ReactDOM from 'react-dom';
import MahsulotlarContext from './context/maxsulotlar/MahsulotlarContext';
import BuyurtmalarContext from './context/BuyurtmalarContext/BuyurtmalarContext';
import './index.css';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <BuyurtmalarContext>
      <MahsulotlarContext>
        <Root />
      </MahsulotlarContext>
    </BuyurtmalarContext>
  </React.StrictMode>,
  document.getElementById('root')
);