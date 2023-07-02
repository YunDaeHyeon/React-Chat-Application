import React from 'react';
import ReactDOM from 'react-dom/client';
// import Chakra
import { ChakraProvider } from '@chakra-ui/react';
// react-router-dom 호출
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);