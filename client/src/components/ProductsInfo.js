import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const ProductsInfoPage = () => {

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const [cartItem, setCartItem] = useState(0);


    const navigate = useNavigate()
  
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setProduct(data)
          })
          .catch(error => console.log(error))
      }, [id]);

    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePlusClick = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCartClick = () => {
        const timestamp = Date.now();
        const newCartItem = { ...product, quantity, timestamp };
        fetch('http://localhost:3000/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCartItem)
        })
        .then(() => {
          console.log('Item added to cart:', newCartItem);
          setCartItem(newCartItem)
          navigate('/order');
        })
        .catch(error => console.log(error));
    };
    
      
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mr-20 ml-20">
            {product &&
                <>
                    <div className=" ">
                        <img src={product.image} alt="beauty product"
                        className="w-3/4 h-auto rounded-2xl" />
                    </div>
    
                    <div className=" mt-9">
                        <div>
                            <h1 className="text-3xl font-bold mb-5  font-['Poppins']">{product.name}</h1>
                            <p className="text-black italic mb-4 font-bold"> ksh {product.price}</p>
                            <p className="mb-6 text-grey font-medium"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, facere illum ea sint consequuntur labore sit dolore quos nulla in?{product.description}</p>
                        </div>
                        <div className="flex justify-around ">
                            <div className=" p-4">
                                <button className="bg-transparent rounded-lg px-3 py-1"
                                    onClick={handleMinusClick}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className="px-5">{quantity}</span>
                                <button className="bg-transparent rounded-lg px-3 py-1"
                                    onClick={handlePlusClick}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <div className="bg-pink py-6 px-8 rounded-2xl shadow-xl">
                                <button onClick={handleAddToCartClick}>
                                    <span className="uppercase text-white font-semibold">add to cart</span> 
                                    <span className="ml-3 "><FontAwesomeIcon icon={faCartShopping} /></span>
                                </button>
                            </div>
                        </div>
                        <div className="  text-bold mt-5 ">
                        <Link to="/products">
                            <div className="text-lg font-medium text-brown hover:underline dark:text-brown">
                                continue shopping
                            </div>   
                        </Link> 
                        </div>
                    </div>
                </>
            }
        </div>
    );
    
}
 
export default ProductsInfoPage;
