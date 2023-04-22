import React from 'react'
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

function Slideshow() {
    // const scrollLeft = () => {
    //     document.getElementById("content").scrollLeft -= 400;
    // }
    // const scrollRight = () => {
    //     document.getElementById("content").scrollLeft += 400;
    // }
    
    return (
        <div className="relative">
        <div className=" font-['Poppins'] text-center py-4  text-2xl font-bold">Browse Our Products</div>
        <div className="absolute right-0 top-5 flex">
          {/* <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <FontAwesomeIcon icon={faChevronLeft} style={{color: "#e8a0bf", border: "2px solid #e8a0bf "}} className="fa-2x fa-fw fa-border " />
          </button> */}
        </div>
        <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        {/* <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
            <FontAwesomeIcon icon={faChevronRight} style={{color: "#e8a0bf", border: "2px solid #e8a0bf "}} className="fa-2x fa-fw fa-border" />
          </button> */}

      </div>
    );
  }
  

export default Slideshow
