import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { MyRouter } from './router/MyRouter';


export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}
