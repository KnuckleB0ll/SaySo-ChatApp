import React from 'react'
import GenderRadioButton from './radiobutton'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'



const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });


  const {loading,signup} = useSignup();

  const handleGenderCheckbox = (gender) => {
    setInputs({...inputs,gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 p-4">
        <h1 className='text-3xl font-semibold text-center text-white'> SignUp 
          <span className='text-blue-400'> SaySo</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Full Name</span>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs mt-2"
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Username</span>
              <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs mt-2"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Password</span>
              <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs mt-2"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
              />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full'>
              <span className='text-white'>Confirm Password</span>
              <input type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs mt-2"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              />
            </div>
          </div>
          <GenderRadioButton onCheckboxChange = {handleGenderCheckbox} selectedGender={inputs.gender}/>
          <div className='p-2'>
            <button className="text-white btn btn-neutral w-full max-w-xs mx-auto">Sign Up</button>
          </div>
          <div className='p-2'>
            <Link to='/login' className='text-white hover:underline'>Already have an account?</Link>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default SignUp





//Starter Code for SignUp Page

// import React from 'react'
// import GenderRadioButton from './radiobutton'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 p-4">
//         <h1 className='text-3xl font-semibold text-center text-white'> SignUp 
//           <span className='text-blue-400'> SaySo</span>
//         </h1>
//         <form>
//           <div className='p-2'>
//             <div className='text-left w-full'>
//               <span className='text-white'>Full Name</span>
//               <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs mt-2" />
//             </div>
//           </div>
//           <div className='p-2'>
//             <div className='text-left w-full'>
//               <span className='text-white'>Username</span>
//               <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs mt-2" />
//             </div>
//           </div>
//           <div className='p-2'>
//             <div className='text-left w-full'>
//               <span className='text-white'>Password</span>
//               <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs mt-2" />
//             </div>
//           </div>
//           <div className='p-2'>
//             <div className='text-left w-full'>
//               <span className='text-white'>Confirm Password</span>
//               <input type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs mt-2" />
//             </div>
//           </div>
//           <GenderRadioButton/>
//           <div className='p-2'>
//             <button className="text-white btn btn-neutral w-full max-w-xs mx-auto">Sign Up</button>
//           </div>
//           <div className='p-2'>
//             <a href='#' className='text-white hover:underline'>Already have an account?</a>
//           </div>
//         </form>
//       </div> 
//     </div>
//   )
// }

// export default SignUp