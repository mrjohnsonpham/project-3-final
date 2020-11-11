import React  from "react";


function Details (props) {
    
return(
<div className="container">
<h1>Product details</h1>
<h1>title:"{props.pDetail.productName}"</h1> 
<h1>price: ${props.pDetail.price}</h1>
<h1><img src={props.pDetail.image} alt={props.pDetail.image} /> </h1>
<h1>inCart ="{props.pDetail.inCart}"</h1>
<h1>description: "{props.pDetail.description}"</h1>
<h1>id: {props.pDetail._id}</h1>
<h1>ProdutNumber ={props.pDetail.itemNumber}</h1> 
<h1>Available: {props.pDetail.isAvailable}</h1> 

</div>
)
}


export default Details;