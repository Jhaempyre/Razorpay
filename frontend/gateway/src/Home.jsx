import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = () => {

    const checkoutHandler = async (amount) =>{
        const { data: { order } } = await axios.post("http://localhost:8000/api/checkout", {
            amount
        })

        const {data :{key}} =await axios.get("http://localhost:8000/api/getkey")

    

        console.log(order)
        console.log(window)

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "JhaEmpire",
            description: "Billing to products",
            image: "https://avatars.githubusercontent.com/u/114846931?v=4",
            order_id: order.id,
            callback_url: "http://localhost:8000/api/paymentVerification",
            prefill: {
                name: "Aashish Kumar Jha",
                email: "jhaashish.ajha@gmail.com",
                contact: "9625750646"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
    
  return (
    <Box>

    <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

        <Card amount={5000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
        <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

    </Stack>
</Box>
  )
}

export default Home