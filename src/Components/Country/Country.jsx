// rsc press kore tab press korle korle nise ekbare cole ashbe 
import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handelVisitedCountries, handleVisitedFlag}) => {
         const [visited,setVisited]= useState(false);
         // console.log(handelVisitedCountries);
     const handleVisited =()=>{
     //basic system
     //   if(visited){
     //      setVisited(false)
     //   }
     //   else{
     //      setVisited(true)
     //   }
     
     //second system
     // setVisited(visited ? false : true)
        
     //third system
     setVisited(!visited);
     handelVisitedCountries(country)
     }

  
    // console.log(country)
   //  console.log(country.area.area);
    // console.log(country.flags.flags.png)
    // console.log(country.population.population)
    return (
        <div className={`country  ${visited && 'country-visited'}`}>

             <img src={country?.flags?.flags?.png} alt = {country.flags.flags.alt}/>
             <h3>Name: {country.name.common}</h3>
             <p>Population{country.population.population}</p>
             <p>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : 'small country'}</p>
            <button onClick={handleVisited}>
               {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=> handleVisitedFlag(country?.flags?.flags?.png)}>Add visited Flag</button>

        </div>
     );
};

export default Country;


/***
 * react e css kora jay 4 vabe 
 * 1. inlines css h 
 */