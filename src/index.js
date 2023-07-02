import React from 'react';
import ReactDOM from 'react-dom/client';
// import Chakra
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);