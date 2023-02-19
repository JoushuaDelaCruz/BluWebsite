import React from 'react'

const Footer = () => {

  const getYear = () => {
    let today = new Date();
    return today.getFullYear();
  };

  return (
    <footer className='flex flex-col justify-center justify-items-center bg-blue-900 text-white py-6 gap-2'>
        <section className='flex justify-center space-x-3'>
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fab fa-facebook fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i class="fa-brands fa-discord fa-2x"></i>
        </section>
        <p className='text-sm text-center align-middle text-gray-300'>DC Blu &copy; {getYear()} All Rights Reserved</p>
    </footer>
  )
}

export default Footer