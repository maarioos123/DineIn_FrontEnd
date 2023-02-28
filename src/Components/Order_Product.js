import React from "react";
export default function Order_Product(props) {
    console.log(props.order_product)
    const { product, comment, quantity } = props.order_product;
    return(
    <div>
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 className="my-0">{product.product_Name}</h6>
                <small className="text-muted">{comment}</small>
            </div>
            <span className="text-muted">{quantity}</span>
        </li>
    </div>
    )
}