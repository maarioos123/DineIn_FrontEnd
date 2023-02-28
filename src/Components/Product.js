import React from "react";
import angusburgerImg from "./resources/angusburger.png";
import souvlakiaImg from "./resources/souvlakia.png";
export default function Product(props) {
    const { product, comment, quantity } = props.order_product;
    return (
        <div>
            <div className="row justify-content-between align-items-center">
                <div className="col-md-2">
                    <img src={product.image ==="angusburger.png" ? angusburgerImg : souvlakiaImg} className="img-fluid" alt="food" />
                </div>
                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0">
                        {product.product_Name}
                    </p>
                </div>
                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">
                        {props.order_product.comment}
                    </p>
                </div>
                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">
                        Ποσότητα: {props.order_product.quantity}
                    </p>
                </div>
                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p className="text-muted mb-0 small">
                        Τιμή : {product.price}
                    </p>
                </div>
            <div className="row d-flex align-items-center">
                    <div className="col-md-2">
                        <p className="text-muted mb-0 small">Κατάσταση παραγγελίας</p>
                    </div>
                    <div className="col-md-10">
                        <div className="progress" style={{height: "6px", borderRadius: "16px"}}>
                            <div className="progress-bar" role="progressbar"
                                 style={{width: "65%", borderRadius: "16px", backgroundColor: "#EBC258"}}
                                 aria-valuenow="65"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Προετοιμασία</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Παράδοση</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}