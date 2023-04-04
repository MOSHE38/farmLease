import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const AddListHero = () => {
  return (
    <>
        <div className='flex items-center justify-between w-9/12 bg-white py-4 px-4 ml-10 rounded-xl'>
            <p className='text-xl font-bold'>Create New FarmLand Listing Now</p>
              <button type="submit" className="w-40 bg-green-light text-white uppercase px-4 py-2 text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
                  <Link to="/create-listing" className="flex justify-center items-center">
                    <VscAdd className="mr-2 text-2xl bg-red-200 p-1" />
                    New Listing
                  </Link>
              </button>
          </div>
    </>
  )
}

export default AddListHero;