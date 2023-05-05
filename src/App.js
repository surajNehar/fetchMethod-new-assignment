import React from 'react';
import './App.css'
import { useRef } from 'react';
import axios from 'axios'

export default function App() {
  const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

  const inputref = useRef(' ')

  function mobileOtp() {
    axios({
      method: 'post',
      url: 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
      data:{
        mobile:parseInt(inputref.current.value)
      }


    })
  
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <input type="number" ref={inputref} />
      <button onClick={mobileOtp}>OTP</button>
    </div>
  );
}
