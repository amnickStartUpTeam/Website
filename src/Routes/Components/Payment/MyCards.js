
import React, { useState, useEffect } from "react";
import "../../css/MyCards.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
	FormControl,Select,Text,Button,Checkbox,
	FormLabel,Stack,HStack,Box
  } from "@chakra-ui/react"
import ModelPopup from '../SignUp/ModelPopup';  

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
 
	const [pop, setPop] = useState({
	  showPopup: false,
	  text:'payment',
	  ext:'ext'
	})

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
		fetchCurrencies();  
		}, []);

		const addPayment = () => {  
			if(data.number.length>16){
			  setPop({
				showPopup: !pop.showPopup,
				text:'ooppps ! Your card number doesn`t match'
			  })
				
			}else{ 
			  if (data.current.length>=1&data.name.length>=1&data.expiry.length>=1
				&data.cvc.length>=3 &data.email.length>=1){ 
				//   postPayment(data);
				  console.log('Payment is OK')
				  setPop({showPopup: !pop.showPopup,text:"Payment is succesfull"})
				  setTimeout(() => {
					window.location.reload(); 
				  }, 6000); 
				}  else{setPop({showPopup: !pop.showPopup,text:"please fill all fields"})}     
			}
		  }
		
	return (
		<div className="PaymentPage">
			 <br/>
		 
		<div id="PaymentForm">
			<FormControl  size="xs"  id="currency">
  				<FormLabel textAlign="center" fontSize="small">Select your preferred currency</FormLabel>
  				<Select width="90%"  borderRadius="lg" size="xs"    paddingLeft="10"  
				  backgroundColor="#fffe" placeholder="select"  fontSize="large"
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
			<HStack >
				<select id="countryId" name="code" 
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
				  {pop.showPopup ?
                    <ModelPopup
                      text={pop.text}
                      ext={pop.ext}
                    />
                    : null
                  }
			</form>
			</div>
		
		</div>
	);
};

export default MyCards;
