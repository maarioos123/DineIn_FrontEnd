import React from "react";
import "./template.css"
import "./Main.css"
import data from "./data"
import Product from "./Product";
export default function SuccessfulOrder() {
    const Products = data.map(item => {
        return (
            <Product
                key={item.product.product_Id}
                order_product={item}
            />
        )
    })
    return(
        <div>
            <section className="h-100 gradient-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-10 col-xl-8">
                    <div className="card" style={{borderRadius:'10px'}}>
                        <div className="card-header px-4 py-5">
                            <h5 className="text-muted mb-0">Ευχαριστούμε για την παραγγελία
                                σας, Μάριε!
                                <span style={{color: "#E73C3"}}></span>
                            </h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="lead fw-normal mb-0" style={{color: "E73C35}"}}>Παραγγελία</p>
                                <p className="small text-muted mb-0">Αριθμός Παραγγελίας : 12</p>
                            </div>
                            <div className="card shadow-0 border mb-4">
                                <div className="card-body">
                                    {Products}
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Λεπτομέριες Παραγγελίας</p>
                                    </div>

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Σύνολο</span>120</p>
                                    </div>

                                    <div className="d-flex justify-content-between">

                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Έκπτωση</span> 0€</p>
                                </div>
                                </div>

                            </div>

                        </div>
                        <div className="card-footer border-0 px-4 py-5"
                             style={{backgroundColor: "#E73C35", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>
                            <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Σύνολο
                                : <span className="h2 mb-0 ms-2">15.5€</span></h5>
                        </div>
                    </div>
                </div>
            </div>


            </section>




        </div>
    )
}