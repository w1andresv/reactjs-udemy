
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CounterApp = ({ value=10 }) => {

   const [counter, setCounter] = useState(value);


   const clickAdd = (e) => {
       setCounter(counter+1)
   }
   const clickSubstrac = (e) => {
       setCounter(counter-1)
   }
   const clickReset = (e) => {
       setCounter(value)
   }
   return (
      <>
         <h1>Contador</h1>
         <h2>{counter}</h2>
         <button id='add' onClick={clickAdd}>+1</button>
         <button id='reset' onClick={clickReset}>Reset</button>
         <button id='subs' onClick={clickSubstrac}>-1</button>
         <input></input>
      </>
   )
}

CounterApp.propTypes = {
   value: PropTypes.number
}

export default CounterApp