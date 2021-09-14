import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import MyCards from './Payment/MyCards';

const Payment = () =>{
  return (
    <ChakraProvider>
        <MyCards/>
    </ChakraProvider>
            
  );
}

export default Payment;
