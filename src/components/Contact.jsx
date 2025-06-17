import React, { useState } from 'react'

function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7b320bd5-0fc5-4dd3-9895-82b949014c57");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-10'>
        <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
      I'd love to hear from you! If you have any questions, comments or 
      feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
    <input 
      className='w-full p-3 outline-none border-[0.5px] border-gray-500 rounded-md' 
      type="text" 
      placeholder="Enter your name" 
      required
      name='name'
    />
    <input 
      className='w-full p-3 outline-none border-[0.5px] border-gray-500 rounded-md' 
      type="email" 
      placeholder="Enter your email" 
      required
      name='email'
    />
  </div>
  <textarea 
    className='w-full p-4 mb-6 outline-none border-[0.5px] border-gray-500 rounded-md' 
    rows="6" 
    placeholder="Enter your message" 
    required
    name='message'
  ></textarea>
  <div className="flex justify-center">
    <button 
      className='flex items-center gap-2 border px-4 py-2 rounded-full hover:bg-white hover:text-black duration-300 cursor-pointer' 
      type='submit'
    >
      Submit now →
    </button>
  </div>
  <p className='mt-4'>{result}</p>
</form>
    </div>
  )         
}

export default Contact