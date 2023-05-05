import React from 'react';
import './App.css'
import { useState,useEffect } from 'react';
import axios from 'axios'

export default function App() {

  const [image , setImage] = useState(' ')


  useEffect(function (){

    axios.get('https://dog.ceo/api/breeds/image/random')
   .then ((response)=> setImage(response.data.message))
    .catch((error) => console.log(error)) 

  },[])


  return (
    <div>
      <img 
        src={image}
        height={'600px'}
        width={'600px'}
        alt='dog image'
      />
    </div>
  );
}
