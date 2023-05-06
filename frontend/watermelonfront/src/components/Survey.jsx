import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import '../App.css';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


export const Survey = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    { name: '', balance: '', price: '', network: '', address: '', email: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step < 6) {
      setStep(step + 1);
    } else {
      try {
        await axios.post('http://127.0.0.1:8080/survey', formData);
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 3000
        })
        navigate('/results');
      } catch (e) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 3000
        })
      }
    }
  };

  return (
    <div className="container bg-zinc-800">
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="content__container">
              <div className="font-semibold text-gray-900 title">What is the name of your store</div>
              <div className="field">
                <label className="label italic text-sm ">Example: Razer Gold, Amazon, Target.</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" />
              </div>
              <div className="field">
                <button className="btn" type="submit" >Next</button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="content__container">
              <div className="title">Balance</div>
              <div className="field">
                <label className="label italic text-sm ">What is the balance left on your gift card? Example answer: $100,200 EUR.</label>
                <input type="text" name="balance" value={formData.balance} onChange={handleChange} />
              </div>
              <div className="field btns">
                <button className="btn" type="button" onClick={() => setStep(step - 1)}>Previous</button>
                <button className="btn" >Next</button>
              </div>
            </div>

          )}
          {step === 3 && (

            <div className="content__container">
              <div className="title">What price are you selling at?</div>
              <div className="field">
                <label className="label italic text-sm ">Example Answer: $70.</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} />
              </div>
              <div className="field btns">
                <button className="btn" type="button" onClick={() => setStep(step - 1)}>Previous</button>
                <button className="btn" >Next</button>
              </div>
            </div>

          )}
          {step === 4 && (

            <div className="content__container">
              <div className="title">Which network would you like to receive funds at?</div>
              <div className="field">
                <label className="label italic text-sm ">If you are unsure, please select Polygon. (You may change this later.) </label>
                <select value={formData.network} name="network" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option value="polygon">Polygon</option>
                  <option value="ethereum">Ethereum</option>
                </select>
              </div>
              <div className="field btns">
                <button className="btn" type="button" onClick={() => setStep(step - 1)}>Previous</button>
                <button className="btn" >Next</button>
              </div>
            </div>

          )}
          {step === 5 && (

            <div className="content__container">
              <div className="title">What address do you want to receive funds at?</div>
              <div className="field">
                <label className="label italic text-sm ">You may change this later. Example: 0xfA63Ca5caF1D88f42e1A73aE0E0cb7060B9E7292.</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
              </div>
              <div className="field btns">
                <button className="btn" type="button" onClick={() => setStep(step - 1)}>Previous</button>
                <button className="btn" >Next</button>
              </div>
            </div>

          )}
          {step === 6 && (

            <div className="content__container">
              <div className="title">What’s your email address?</div>
              <div className="field">
                <label className="label italic text-sm ">You may change this later. Example: test@gmail.com.</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="field btns">
                <button className="w-full border-none btn" type="button" onClick={() => setStep(step - 1)}>Previous</button>
                <button className="submit btn" type="submit" >Submit</button>
              </div>
            </div>

          )}
        </form>
      </div>
    </div>
  )
}
