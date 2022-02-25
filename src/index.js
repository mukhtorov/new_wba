import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './root';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
