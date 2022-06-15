import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
     <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/f1051a9e-5df0-41d7-83e2-d254fece27de/MU-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email'/>
                        <input className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='cureent-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type='checkbox' />Remember me</p>
                            <p>Need Help</p>
                        </div>
                        <p className='py-4'>
                            <span className='text-gray-600'>Already subscribed to Netflix?</span>{''}
                            <Link to='/login'> Sign In </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Signup