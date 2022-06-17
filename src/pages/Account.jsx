import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <> 
     <div className='w-full text-white'>
       <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/f1051a9e-5df0-41d7-83e2-d254fece27de/MU-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/' />
       <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
       <div className='absolute top-[20%] p-4 md:p-8'>
         <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
       </div> 
     </div>
     <SavedShows />
    </>
  )
}

export default Account;