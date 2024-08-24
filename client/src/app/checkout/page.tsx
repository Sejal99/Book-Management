"use client"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../(Components)/CheckoutForm';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../(Components)/GlobalRedux/store';
import { BASE_URL } from '../(Components)/base';
import { useRouter } from 'next/navigation';
import Navbar from '../(Components)/Navbar';
import OrderSuccessful from '../(Components)/OrderSuccessful';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//@ts-ignore
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_CLIENT);

export default function App() {
  const cartBooks = useSelector((state: RootState) => state.books);
  
  const [clientSecret, setClientSecret]= useState(null)
  const [loading, setLoading]= useState(true)
  const [checkoutSuccess, setCheckoutSuccess]= useState(false)
  const router= useRouter()
  
  const fun= useCallback(async()=> {
    try{
      // @ts-ignore
      const output= JSON.parse(localStorage.getItem("paymentIntentId"))
      // @ts-ignore
      const amount= parseInt(localStorage.getItem("amount"))
      setLoading(true)
      const res= await fetch(`${BASE_URL}/orders/create-payment`,{
        method:"POST",
        // @ts-ignore
        headers:{
          'Content-Type':"application/json",
          "authorization": localStorage.getItem('token')
        },
        body:JSON.stringify({items:cartBooks, amount:amount, payment_intent_id :(output? output.id : null)})
      });
  
      if(!res.ok){
        throw new Error("Network problem!")
      }
      const data = await res.json()
      
      setLoading(false)
      if( data?.message?.statusCode === 400){
        setLoading(false)
        router.push('/')
      }else{
        if(cartBooks){
          setClientSecret(data.client_secret)
        localStorage.setItem("paymentIntentId", JSON.stringify(data))
        }
        
      }
  
    }catch(err){
      setLoading(false)
      console.log(err);
      
    }
  },[])

  useEffect(()=> {
    fun()
  },[])
    

  const options = {
    clientSecret:clientSecret,
    appearance:{
        theme:'stripe',
        label:'floating'
    }
  };

  return (
    <div>
      <Navbar />
    {clientSecret && cartBooks &&
    <>
    {/* @ts-ignore */}
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm clientSecret={clientSecret} setClientSecret={setClientSecret} setCheckoutSuccess={setCheckoutSuccess} />
    </Elements>
    </>
    }
    <div className=' flex justify-center items-center h-[80vh]'>
      {
        loading && <div>Loading......</div>
      }
      {
        checkoutSuccess && <div>
          {/* <button onClick={()=>router.push("/my-orders")} className=' bg-green-600 text-white p-3 rounded-md'></button> */}
          <OrderSuccessful/>
        </div>
      }
    </div>
    </div>
  );
};