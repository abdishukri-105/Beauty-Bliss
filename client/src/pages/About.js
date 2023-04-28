import React from 'react';
import shukri from "../images/mypic.jpeg"
const About = () => {


  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Beauty Products Ecommerce Website
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our ecommerce website is the one-stop-shop for all your beauty product needs. We offer a wide variety of products from top brands at affordable prices, with fast and reliable shipping. Our user-friendly interface makes it easy to find what you're looking for, and our secure checkout process ensures that your information is always safe.
          </p>
          <h3 className="text-2xl font-extrabold text-gray-900 mt-8 mb-4">
            How to Use Our Beauty Products Ecommerce Website
          </h3>
          <ol className="list-decimal list-inside">
            <li>Browse our wide selection of beauty products by category or brand.</li>
            <li>Read detailed product descriptions and reviews to find the perfect product for you.</li>
            <li>Add products to your cart and proceed to checkout.</li>
            <li>Enter your shipping and payment information and confirm your order.</li>
            <li>Enjoy your new beauty products!</li>
          </ol>
          <h3 className="text-2xl font-extrabold text-gray-900 mt-8 mb-4">
            Want to Contribute to Our Beauty Products Ecommerce Website?
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            We're always looking for talented developers to help us improve our ecommerce website. If you're interested in contributing, please visit our GitHub repository and submit a pull request. We appreciate all contributions, big or small!
          </p>
          <div className="mt-8 text-center">
            <a href="https://github.com/abdishukri-105/Beauty-Bliss" className="font-medium text-pink-600 hover:text-pink-500">
              View our GitHub repository
            </a>
          </div>
        </div>
      </div>


      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet the Developers
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're a team of passionate developers who are dedicated to creating the best beauty products ecommerce website possible.
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Abdishukri Mohamed
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Full Stack Developer
                  </p>
                  {/* <div className=' object-contain'>
                   <img src={shukri} alt="abdishukri" className=''  />
                  </div> */}
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                     Abdishukri is a software developer with a degree in IT from Jomo Kenyatta University of Agriculture and Technology. Currently, I'm in a Bootcamp called Moringa School
                  </p>
                </div>
              </div>
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Mutheki Njora
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Frontend Developer
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc nec nisi convallis pulvinar. Sed mattis, turpis a lacinia faucibus, quam velit feugiat lacus, quis vestibulum mauris quam sit amet arcu. 
                  </p>
                </div>
              </div>
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Griffins Ngeno
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Backend Developer
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc nec nisi convallis pulvinar. Sed mattis, turpis a lacinia faucibus, quam velit feugiat lacus, quis vestibulum mauris quam sit amet arcu. 
                  </p>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Casey Ochieng
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Frontend Developer
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc nec nisi convallis pulvinar. Sed mattis, turpis a lacinia faucibus, quam velit feugiat lacus, quis vestibulum mauris quam sit amet arcu. 
                  </p>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Victor Aketch
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Backend Developer
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc nec nisi convallis pulvinar. Sed mattis, turpis a lacinia faucibus, quam velit feugiat lacus, quis vestibulum mauris quam sit amet arcu. 
                  </p>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Louis Okwaro
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                    Backend Developer
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-gray-500">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc nec nisi convallis pulvinar. Sed mattis, turpis a lacinia faucibus, quam velit feugiat lacus, quis vestibulum mauris quam sit amet arcu. 
                  </p>
                </div>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
