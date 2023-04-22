import makeupBrush from"../images/makeup brush.jpg"
import { Link } from "react-router-dom";


function Card() {
    return (
      <>
        <div className="card bg-white w-[350px] h-[350px] m-2 rounded-lg shadow-lg drop-shadow-lg backdrop-blur-lg">
          <div className="top">
            <img
              className="w-[350px] h-[200px] object-cover p-2 rounded-lg"
              src={makeupBrush}
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3 bg-">
            <div className="title font-semibold text-xs text-grey my-1">
              Makeup Brush
            </div>
            <div className="category text-xs font-light my-1">
            Complete set of makeup brushes for flawless application
            </div>
  
            <div className="pricing flex items-center">
              {" "}
              <div className="price ">ksh 999</div>
              <div className="ml-2 text-xs ">
                ksh<del>1500</del>
              </div>
            </div>
            <div className="flex items-center my-2">

            <Link to= "/product-list">
              <button className=" bg-pink border-pink px-3 py-1 text-xs font-semibold text-white rounded-lg mr-1 ">
                Buy Now
              </button>
            </Link>

            <Link to= "/order">
              <button className=" bg-pink border-pink px-3 py-1 text-xs font-semibold	 text-white rounded-lg mr-1">
                Add to Cart
              </button>
            </Link>
 
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Card;