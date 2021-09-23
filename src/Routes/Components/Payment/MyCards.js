
import React, { useState, useEffect } from "react";
import "../../css/MyCards.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
	FormControl,Select,Text,Button,Checkbox,
	FormLabel,Stack,HStack,Box
  } from "@chakra-ui/react"
const axios = require('axios').default;
const baseUrl = 'http://localhost:8080';


const MyCards = () => {
	const [countries, setCountries] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});

	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const fetchCountries = async() => {
		try{
		  setCountries(await (await axios.get(baseUrl+'/countries')).data);
		} catch(error){
		  console.log(`${error}`);
		}
	  }
	  const fetchCurrencies = async() => {
		try{
			setCurrencies(await (await axios.get(baseUrl+'/currencies')).data);
		} catch(error){
		  console.log(`${error}`);
		}
	  }
	useEffect(() => {
		fetchCountries();
		fetchCurrencies(); console.log(currencies);
		}, []);

	return (
		<div className="PaymentPage">
			 <br/>
		 
		<div id="PaymentForm">
			<FormControl  size="xs" width="100%" id="currency">
  				<FormLabel textAlign="center" fontSize="small">Select your preferred currency</FormLabel>
  				<Select   borderRadius="lg" size="xs" inlineSize="40" marginLeft="24" 
				  backgroundColor="#fffe" placeholder="select" 
                        onChange={handleInputChange}>
                            { currencies.map((currency) =>
                              <option value={currency.id}>{currency.currency}</option> )
                             }
  				</Select>
			</FormControl> <br/>
			<div className='storeFooterPaymentLink'>
            	<h3>Payment Methods</h3>
              	<a href="#" className="storeFooterIcon"><i className='fab fa-cc-visa'></i></a>
              	<a href="#" className="storeFooterIcon"><i className='fab fa-cc-mastercard'></i></a>
              	<a href="#" className="storeFooterIcon"><i className='fab fa-paypal'></i></a>
            </div><br/>
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			
			
			<form className="PaymentForm" action="">
				<Box textAlign="left" >
					<Text fontSize="sm" paddingLeft="2" as="em">Card Number</Text>
				<input className="PaymentFormInput"
					type="number"
					name="number"
					placeholder="0000 0000 0000 0000"
					onChange={handleInputChange}
				/>
					<Text fontSize="sm" paddingLeft="2" as="em">Your Name</Text>
				<input className="PaymentFormInput"
					type="text"
					name="name"
					placeholder="John Doe"
					onChange={handleInputChange}
				/>
					<Text fontSize="sm" paddingLeft="2" as="em">Expire Date</Text>
				<input className="PaymentFormInput"
					type="date"
					name="expiry"
					placeholder="12/12/2023"
					onChange={handleInputChange}
				/>
				
				<input className="PaymentFormInput"
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}
				/>	
				<input className="PaymentFormInput"
					type="email"
					name="email"
					placeholder="email"
					onChange={handleInputChange}
				/>	
				<Box w="7px" h="10"  />  <i className='fas fa-phone'></i> <Text fontSize="sm" paddingLeft="2" as="em">Phone number</Text>
			<HStack spacing="24px">
				<select id="countryId" name="countryId" 
                        onChange={handleInputChange}>
                          <option value={countries}>-Code-</option>
                            { countries.map((country) =>
                              <option value={country.id}>{country.country}/+{country.code}</option> )
                             }
                      </select> 
				<input className="PaymentFormInput" isRequired
					type="phone"
					name="phone"
					placeholder="number"
					onChange={handleInputChange}
				/>
    		</HStack>	
			</Box>
				<Checkbox size="sm" defaultIsChecked>Check this box if you wish to receive invoice via email</Checkbox>
				<Button
            		mt={4}
            		colorScheme="teal"
            		type="submit"
          			>
            		Pay Now
          		</Button>
				 
			</form>
			</div>
		
		</div>
	);
};

export default MyCards;