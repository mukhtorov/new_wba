import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './root';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { StateMode } from './context/StateMode';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateMode>
        <Root />
      </StateMode>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
