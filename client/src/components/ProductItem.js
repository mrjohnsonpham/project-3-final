import React, { useState, useContext, useEffect,useCallback } from "react";
import { Link , useHistory } from "react-router-dom";
import API from "../utils/API";
import "./style.css";
import CartContext from "../utils/CartContext";
// import Details from '../components/Details'

function ProductItem(props) {
  const {
   addProductDetails,
    addProductToCart,
    // refreshCart,
  } = useContext(CartContext);

  //   const { total, subtotal, shipping, products, setProducts, setShipping, setSubtotal, setTotal,addProductToCart,refreshCart } = useContext(CartContext);

  //      setName(name);
  //   setAvailability(available);
  //   setQuantity(quantity);

  //   setPrice(price1);
  //   setImage(image1);
  //   setProductid(_id);

  const [products, setProducts] = useState([]);
  // const [itemDetail, setItemDetail] = useState({});

  // function handleItemDetail(product) {
  //   setItemDetail({
  //     name: product.productName,
  //     description: product.description,
  //   });
  // }

  // console.log(itemDetail);

  // Load all products and store them with setProducts
  useEffect(() => {
    loadProducts();
  }, []);
  //   console.log(products);

  // Loads all products and sets them to products
  function loadProducts() {
    API.getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

const handleItemDetails =(event) =>{
  event.preventDefault();
  const thisElement = event.target;
  const price = parseFloat(thisElement.getAttribute("data-price"));
  const _id = thisElement.getAttribute("data-id");
  const name = thisElement.getAttribute("data-name");
  const availability = thisElement.getAttribute("data-available");
  const image = thisElement.getAttribute("data-image");
  const shipping = parseFloat(thisElement.getAttribute("data-shipping"));
  const description = thisElement.getAttribute("data-description");
  console.log(price);
  console.log(_id);
  console.log(name);
  console.log(availability);
  console.log(shipping);
  console.log(availability);
  console.log(description);
  addProductDetails(name, availability, 1, price, shipping, image, _id,description);
  handleOnClick();
}


  const handleAddToCart = (event) => {
    // if the user hits the button to add to cart, this function will fire
    event.preventDefault();
    const thisElement = event.target;

    const price = parseFloat(thisElement.getAttribute("data-price"));

    const _id = thisElement.getAttribute("data-id");
    const name = thisElement.getAttribute("data-name");
    const availability = thisElement.getAttribute("data-available");
    const image = thisElement.getAttribute("data-image");
    const shipping = parseFloat(thisElement.getAttribute("data-shipping"));

    // helpJA(name, available,quantity ,price1, image1, _id);
    console.log(price);
    console.log(_id);
    console.log(name);
    console.log(availability);
    console.log(shipping);
    console.log(availability);

    //addProductToCart = (productName, isAvailable, quantity, price, shippingCost, image, _id)

    addProductToCart(name, availability, 1, price, shipping, image, _id);

    // setEmail(data.data.email);

    // value.addToCart(id)
    // value.openModal(id);
  };

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/details'), [history]);

  // const { title, img, price, inCart, id } = props.product

  return (
    <div className="row">
      {products.map((product) => (
        <div key= {product.itemNumber} className="col-sm-9 mx-auto col-md-6 col-lg-3 my-3">
          {/* {console.log(product)} */}
          <div className="card">
            {/* <ProductConsumer> */}
            {/* <Products> */}

            {/* <div onClick={() => { value.handleDetail(id); }} className="img-container p-5"> */}
            <div className="img-container p-5" >
              {/* <div styles={{ display: "none" }}> */}
                {/* <Details product={product} /> */}
              {/* </div> */}
              
            <Link to="/details"  >
                <img
                  src={product.image}
                  alt={product.productName}
                  className="card-img-top"
                  
                  onClick={handleItemDetails}

                  data-name={product.productName}
                  data-image={product.image}
                  data-available={product.isAvailable}
                  data-id={product._id}
                  data-shipping={product.shippingCost}
                  data-price={product.price}
                  data-description={product.description} 
             
                  />
            
                  
</Link>
              <button
                className="cart-btn"
                disabled={product.inCart ? true : false}
                onClick={handleAddToCart}
              >
                {product.inCart ? (
                  <p
                    className="text-capitalize mb-0"
                    disabled
                    data-product={product._id}
                    data-price={product.price.toString()}
                  >
                    In Cart
                  </p>
                ) : (
                  <p
                    className="text-capitalize mb-0"
                    data-name={product.productName}
                    data-image={product.image}
                    data-available={product.isAvailable}
                    data-id={product._id}
                    data-shipping={product.shippingCost}
                    data-price={product.price}
                    data-description={product.description}
                  >
                    Add to Cart <i className="fa fa-cart-plus" />
                  </p>
                )}
              </button>
            </div>

            {/* </Products> */}
            {/* </ProductConsumer> */}
            <div className="card-footer d-flex justify-content-between">
              <p className="align-serl-center mb-0">{product.productName}</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">${product.price}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;

// export  {itemDetail1} ;
