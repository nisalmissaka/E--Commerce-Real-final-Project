import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md"> 
      <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Contact Us</h2>
      <form action="">
        <div className='mb-4'>
          <label className="block text-white text--sm font-semibold mb-2" htmlFor="" >Your Name</label>
          <input placeholder='nisal' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" />
        </div>
        <div className='mb-4'>
          <label className="block text-white text--sm font-semibold mb-2" htmlFor="" >Your Email</label>
          <input placeholder='nisal@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="email" />
        </div>
        <div className='mb-4'>
          <label className="block text-white text--sm font-semibold mb-2" htmlFor="" >Your Massage</label>
          <textarea rows='4'  placeholder='type your massage' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500' required type="text" />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 foucus:outline-white'>Send Massage</button>
        </div>
      </form>
    </div> 
  )
}
export default Contact