import React from 'react'
import {Link} from 'react-router-dom';
import Card from './Card'
import sell from '../public/sell.png';
import buy from '../public/buy.png';
import rent from '../public/rent.png';

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg items-strech">
       <Card className= " flex flex-col p-4 shadow-md rounded-xl text-center h-full">
       <img 
    src= {buy}
    alt="Buy a Home" 
    className="w-40 h-40 mx-auto my-2 object-cover rounded-lg"
    />

        
          <h2 className="text-2xl font-bold">Buy a home</h2>
          <p className="mt-2">
          A real estate agent can offer a detailed cost analysis, helping you plan ahead and avoid unexpected fees.
          </p><br />

          <div className="mt-auto pt-4">
              <Link
                to="/homes"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Find a local agent
              </Link>
            </div>
       </Card>
        <Card className="flex flex-col p-4 shadow-md rounded-xl text-center h-full">
  <img 
    src= {sell}
    alt="Sell a Home" 
    className="w-40 h-40 mx-auto my-2 object-cover rounded-lg"
    />
        
          <h2 className="text-2xl font-bold">Sell a home</h2>
          <p className="mt-2">
            No matter what path you take to sell your home, we help you navigate a succsessful sale with expert guidance every step of the way.
          </p>
          <div className="mt-auto pt-4">
              <Link
                to="/sell-home"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                See your options
              </Link>
            </div>
        
        </Card>
        <Card className="flex flex-col p-4 shadow-md rounded-xl text-center h-full">
  <img 
    src= {rent}
    alt="Rent a home" 
    className="w-40 h-40 mx-auto my-2 object-cover rounded-lg"
    />
        
          <h2 className="text-2xl font-bold">Rent a home</h2>
          <p className="mt-2 ">
          Experience the convenience of managing your rental journey online—from discovering the best listings to applying and paying rent with ease.
          </p>
          <div className="mt-auto pt-4">
              <Link
                to="/rent-home"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Find rentals
              </Link>
            </div>
        
        </Card>

      </div>

    </div>
  </section>
  )
}

export default HomeCards
