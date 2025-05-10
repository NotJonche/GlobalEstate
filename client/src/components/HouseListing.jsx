import React from 'react';
import houses from '../houses.json';
import HomeListing from './HomeListing';

const HouseListing = ({isHome = false}) => {
const houseListing = isHome ? houses.slice(0,3) : houses;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Houses' : 'Browse Houses'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {houseListing.map((house)=>(
        <HomeListing key={house.id} house={house}/>

         ))}
          
        
        </div>
      </div>
    </section>
  )
}

export default HouseListing
