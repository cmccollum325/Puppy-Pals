import './App.css';
import {puppyList} from './data.js';
import { useState } from 'react';
import {featPupId} from 'react';

function App () {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // function handleClick() {
    //logic here
  // }
  const featuredPup =puppies.find((pup)=> pup.id === featPupId)

  console.log(featuredPup);
  console.log('puppyList', puppyList);
  
   return (
    <>
      <div className='header'>
        <h2 className='title'> The Puppies!</h2>
      </div>
      <div className='App'>
        {
          puppies.map((puppy) => {
          return (
          <p className='names' onClick={()=>{console.log( 
            setFeatPupId(puppy.id))}} key={puppy.id}>{puppy.name}</p>
          );
        })}
       
      </div>
      {featPupId && (
        <div className='pupDetails'>
        <h2 className='headPup'>{featuredPup.name}</h2>
        <ul className='details'>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
      )}
    </>
  )
      }

export default App

