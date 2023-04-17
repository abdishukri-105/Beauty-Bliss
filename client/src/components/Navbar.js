import React from 'react'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BeautyLogo from "./assets/nav-logo.png";
import 'NavbarStyle.css';

function Navbar() {
  return (

    <div className="flex flex-row items-center justify-between  bg-orange-400">
      {/* Logo */}
      <img src={BeautyLogo} alt="Beauty " className="h-9 " />
      {/* <p>Beauty Bliss</p> */}
      {/*Logo*/}
      <div className="flex flex-row space-x-6 mt-10">
        <FontAwesomeIcon icon={faCheckCircle} />
        <FontAwesomeIcon icon={faCheckCircle} className="ml-6" />
        <div>
          {" "}
          <FontAwesomeIcon icon={faCheckCircle} className="ml-6" />
          Log In
        </div>
      </div>  
    </div>

  )
}

export default Navbar