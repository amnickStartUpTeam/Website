
import React, { useState, useEffect } from "react";
import "../../css/MyCards.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
	FormControl,Select,Text,Button,Checkbox,
	FormLabel,HStack,Box
  } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

const axios = require('axios').default;
const baseUrl = 'http://localhost:8080';


const MyCards = () => {
	const [countries, setCountries] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: "",
		current:"",
		email:"",
		code:""
	});
	const history = useHistory();
	const notification = {
		insert: "top",
		container: "bottom-right",
		dismiss: {
			duration: 9000,
			onScreen: true
		  },
		animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
		animationOut: ["animate__animated animate__fadeOut"] // `animate.css v4` classes
	  };

	const handleInputChange = (e) => {
		e.preventDefault();  
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
		fetchCurrencies();  
		}, []);

		const addPayment = (e) => {  
			e.preventDefault();
			if(data.number.length<=15){  
				store.addNotification({
					...notification,
					 title: "ooppps !",
					 message: "Your card number doesn`t match",
					 type: "danger",
				  });
 
				
			}else{ 
			  if (data.current.length>=1&data.number.length>=15&data.name.length>=3&
				data.expiry.length>=1&data.cvc.length==3&data.email.length>=3 ){ 
				//   postPayment(data);
					store.addNotification({
						...notification,
						title: "Wonderful!",
						message: "Payment is succesfull",
						type: "success",
				  	});
					  setTimeout(() => {
						history.push("/");
					  }, 600); 
				}  else{
					store.addNotification({
						...notification,
						 title: "ooppps !",
						 message: "please fill all fields correctly",
						 type: "warning",
					  });
				}     
			}
		  }
		
	return (
		<div className="PaymentPage">
			 <br/>
			 <ReactNotification />
		<div id="PaymentForm">
			<FormControl  size="xs"  id="currency">
  				<FormLabel textAlign="center" fontSize="small">Select your preferred currency</FormLabel>
  				<Select width="90%"  borderRadius="lg" size="xs"    paddingLeft="10"  
				  backgroundColor="#fffe" placeholder="select"  fontSize="large" name="current"
                        onChange={handleInputChange}>
                            { currencies.map((currency) =>
                              <option key={currency.id} value={currency.id}>{currency.currency}</option> )
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
			<HStack >
				<select id="PaymentCountryId" name="code" 
                        onChange={handleInputChange}>
                          <option value={countries}>-Code-</option>
                            { countries.map((country) =>
                              <option key={country.id} value={country.id}>{data.code.length>0? null:country.country} (+{country.code})</option> )
                             }  
                      </select> 
				<input className="PaymentFormInput" 
					type="number"
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
					onClick={addPayment}
          			>
            		Pay Now
          		</Button>
			 
			</form>
			</div>
		
		</div>
	);
};

export default MyCards;
