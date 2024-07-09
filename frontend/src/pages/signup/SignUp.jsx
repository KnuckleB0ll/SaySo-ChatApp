import React from 'react'
import GenderRadioButton from './radiobutton'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 p-4">
        <h1 className='text-3xl font-semibold text-center text-white'> SignUp 
          <span className='text-blue-400'> SaySo</span>
        </h1>
        <form>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Full Name</span>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs mt-2" />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Username</span>
              <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs mt-2" />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Password</span>
              <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs mt-2" />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Confirm Password</span>
              <input type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs mt-2" />
            </div>
          </div>
          <GenderRadioButton/>
          <div className='p-2'>
            <button className="text-white btn btn-neutral w-full max-w-xs mx-auto">Sign Up</button>
          </div>
          <div className='p-2'>
            <a href='#' className='text-white hover:underline'>Already have an account?</a>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default SignUp
