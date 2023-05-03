import React from "react";
import "./dogfetch.css";
import {useState ,useEffect} from "react";

export default function Dogfetch() {
 
  const [image , setImage] = useState(' ')


  useEffect(() => {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error)) 

  },[])


  return (
    <div>
      <img 
        src={image}
        height={'500px'}
        width={'500px'}
        alt='dog image'
      />
    </div>
  );
}