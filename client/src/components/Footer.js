
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedIn } from '@fortawesome/free-solid-svg-icons';
// import { faYouTube } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Beauty Bliss<span className="text-pink"></span>
						</p>
						<div className="flex gap-6 pb-5">
						    {/* <FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer hover:text-yellow-600" />
							{/* <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" /> */}
							{/* <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer hover:pink" /> */}
							{/* <FaTwitter className="text-2xl cursor-pointer hover:pink" /> */}
							{/* <FontAwesomeIcon icon={faLinkedIn} className="text-2xl cursor-pointer hover:pink" /> */}
							{/* <FaLinkedin className="text-2xl cursor-pointer hover:pink" /> */}
							{/* <FontAwesomeIcon icon={faYouTube} className="text-2xl cursor-pointer hover:text-red-600" /> */}
							{/* <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" /> */} 
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Stocks
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Futures & Options
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:pink cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2021-2022 All rights reserved | Build with ❤ by{" "}
					<span className="hover:pink font-semibold cursor-pointer">
						streamline{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;

