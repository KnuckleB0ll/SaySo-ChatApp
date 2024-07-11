import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 p-4">
        <h1 className='text-3xl font-semibold text-center text-white'>
          Login<span className='text-blue-400'> SaySo</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='p-2'>
            <div className='text-left w-full space-y-1.5'>
              <span className='text-white'>Username</span>
              <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className='p-2'>
            <div className='text-left w-full space-y-1.5 mb-5'>
              <span className='text-white'>Password</span>
              <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className=' text-left w-full p-2'>
            <button className="btn btn-neutral w-full max-w-xs"
              disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
          <div className='p-2'>
            <Link to='/signup' className='text-white hover:underline'>Don't have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;






// Starter Code for Login Page

// import React from 'react';

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 p-4">
//         <h1 className='text-3xl font-semibold text-center text-white'>
//           Login<span className='text-blue-400'> SaySo</span>
//         </h1>
//         <form>
//           <div className='p-2'>
//             <div className='text-left w-full space-y-1.5'>
//               <span className='text-white'>Username</span>
//               <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
//             </div>
//           </div>
//           <div className='p-2'>
//             <div className='text-left w-full space-y-1.5 mb-5'>
//               <span className='text-white'>Password</span>
//               <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
//             </div>
//           </div>
//           <div className=' text-left w-full p-2'>
//             <button className="btn btn-neutral w-full max-w-xs">Login</button>
//           </div>
//           <div className='p-2'>
//             <a href='#' className='text-white hover:underline'>Don't have an account?</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

