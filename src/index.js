import React from 'react';
import ReactDOM from 'react-dom';
import MahsulotlarContext from './context/maxsulotlar/MahsulotlarContext';
import BuyurtmalarContext from './context/BuyurtmalarContext/BuyurtmalarContext';
import KategorialarContex from './context/Bategorialar/KategorialarContex';
import FilialarContext from './context/FilialarContext';
import CustomersContext from './context/CustomersContext';
import XisobotlarContext from './context/XisobotlarContext/XisobotlarContext';
import './index.css';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <BuyurtmalarContext>
      <MahsulotlarContext>
        <KategorialarContex>
          <FilialarContext>
            <CustomersContext>
              <XisobotlarContext>
                <Root />
              </XisobotlarContext>
            </CustomersContext>
          </FilialarContext>
        </KategorialarContex>
      </MahsulotlarContext>
    </BuyurtmalarContext>
  </React.StrictMode>,
  document.getElementById('root')
);