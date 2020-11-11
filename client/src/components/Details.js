import React  from "react";




function Details (props) {
    console.log(props.pDetail)

return(
<div>
<h1>Hello! these are the details</h1>
<h1>{props.pDetail.productName}</h1> 
<h1>{props.pDetail.price}</h1>
<h1><img src={props.pDetail.image} alt={props.pDetail.image} /> </h1>
<h1>{props.pDetail.incart}</h1>
<h1>{props.pDetail.description}</h1>
<h1>{props.pDetail._id}</h1>
<h1>{props.pDetail.productNumber}</h1> 
<h1>{props.pDetail.isAvailable}</h1> 

</div>
)
}


export default Details;