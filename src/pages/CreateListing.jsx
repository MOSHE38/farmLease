import React from 'react'
import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddListHero from '../components/AddListHero';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';

const CreateListing = () => {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    acres: "",
    latitude: 0,
    description: "",
    price: "",
    soil: "",
    longitude: 0,
    phone: "",
    images: {}
  }); 
  const {address, acres, latitude, description, price, soil,  longitude, phone, images } = formData;
  function onChange(e) {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }
    if(e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }))
    }
    if(!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  };

  function onSubmit (e) {
    e.preventDefault();
    setLoading(true);
    if (images.lenth > 6) {
      setLoading(false)
      toast.error("maximum of 6 imgaes is allowed")
      return;
    }
    let geolocation = {}
    let location
    if (geolocation) {
      
    }
  }

  if (loading) {
    return <Spinner />
  }
  return (
    <div className='create'>
       <Sidebar />
       <div className='createContainer'>
         
          <div className="bottom w-[910px] ">
            <h1 className='text-center'>Create New Listing</h1>
              <form className='mt-10' onSubmit={onSubmit}>
                <div className="form-left">
                  <div className="formInput">
                    <label>Address</label>
                    <input type="text" value={address} onChange={onChange} id='address' required placeholder='Land address' minLength={10} />
                  </div>

                  <div className="formInput">
                    <label>Total Acres</label>
                    <input type="text" value={acres} onChange={onChange} id="acres" required placeholder='Number of acres' />
                  </div>

                  {!geolocationEnabled && (
                    <div className="formInput">
                      <label>Latitude</label>
                      <input type="number" id='latitude' value={latitude} onChange={onChange} required min="-90" max="90" placeholder='Latitude Number' />
                    </div>
                  )}
                  <div className="formInput">
                    <label>Description</label>
                    <textarea type="text" id='description' value={description} onChange={onChange} required placeholder='Your Description here' className=''/>
                  </div>
                </div>
                <div className="form-right">
                  <div className="formInput">
                    <label>Estimated Price</label>
                    <input type="number" id='price' value={price} onChange={onChange} required placeholder='Price' />
                  </div>
                  <div className="formInput">
                    <label>Soil Type</label>
                    <input type="text" id='soil' value={soil} onChange={onChange} required placeholder='Soil type' />
                  </div>

                  {!geolocationEnabled && (
                    <div className="formInput">
                      <label>Longitude</label>
                      <input type="number" id='longitude' value={longitude} onChange={onChange} required min="-180" max="180" placeholder='Longitude Number' />
                    </div>
                  )}
                  <div className="formInput">
                    <label>Contact Number</label>
                    <input type="number" id='phone' value={phone} onChange={onChange} required placeholder='Phone number' />
                  </div>
                  <div className="formInput">
                    <div className='img-span  justify-between'>
                      <label className='label-img'>Add Images</label>
                      <label className='label-img pl-4' >at least 3 images</label>
                    </div>
                    <input type="file" id='images' onChange={onChange} value={images} accept=".jpg, .png, .jpeg" multiple required placeholder='Upload Images' className='bg-white w-full px-3 py-1.5' />
                    <div className='img-tags flex '>
                      <img src="" alt="img-1" />
                      <img src="" alt="img-2" />
                      <img src="" alt="img-3" />
                    </div>
                  </div>
                </div>
                <div className="btn-form mx-auto mt-[-50px] pb-6">
                  <button type="submit" className="w-40 flex  bg-green-light text-white uppercase px-4 py-2 text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
                    
                      <VscAdd className="mr-2 text-2xl bg-red-200 p-1" />
                      New Listing
                   
                  </button>
              </div>
              </form>
              
          </div>
       </div>
    </div>
  )
}

export default CreateListing;