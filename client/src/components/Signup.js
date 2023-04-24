import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-3xl md:flex-row md:space-y-0 ">
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          {/* <!-- the container for the span --> */}
          <div className="mb-7">
            <span className="mb-3 text-4xl font-medium font-Poppins">Sign up</span>
            <span className="font-light text-pink-400  ml-56 ">
              <span className="font-light text-black">already have account ?</span>
              <Link className="ml-2 text-pink" to="/Login">Sign in</Link>
              {/* <a className="ml-2" href="/image.jpg">Sign in </a> */}
            </span>
          </div>

          <div className="py-4">
            <span className="mb-2 text-md font-Poppins ">Enter your Username or email address</span>
            <input type="text"
              className="w-full p-2 border border-pink rounded-3xl placeholder:font-light placeholder:text-gray-500"
              name="email" id="email 7" />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md font-Poppins">Enter your password</span>
            <input type="password" name="pass" id="pass"
              className="w-full p-2 border border-pink rounded-3xl placeholder:font-light placeholder:text-gray-500" />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
            </div>
            <span className="font-light text-sm text-pink font-Poppins">Forgot password</span>
          </div>
          <button
            class="w-full bg-pink text-white p-1 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup;