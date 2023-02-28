import React from "react";
import data from "./data";
import Product from "./Product";
import Order_Product from "./Order_Product";
export default function Main(props) {

    const Order_Products = data.map(item => {
        return (
            <Order_Product
                key={item.product.product_Id}
                order_product={item}
            />
        )
    })
    const [formData, setFormData] = React.useState({
        name: "",
        Order_Datetime: "",
        Order_sum: 15.5,
        Payment_Method: "Card",
        Customer_Id: 1334,
        Restaurant_Id: 2800,
        Table_No:0,
        order_status: "ready"
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const currentDate = new Date();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                Order_Datetime: currentDate.toLocaleString()
            }
        })
        props.orr(prevOrder=>({
            ...prevOrder,
            table:formData.Table_No,
            datetime:currentDate.toISOString().slice(0, 19).replace('T', ' '),
            payment_method:formData.Payment_Method
        }))
        props.ord(()=> true)
    }

    return (
        <div>
            <body className="site-body">
            <div className="container">
                    <div className="py-5 text-center">
                        <h2>Παραγγελία</h2>
                        <p className="lead">Παρακαλώ εισάγεται τα στοιχεία για την Παραγγελία σας</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="badge text" style={{background: '#e51f1f', fontSize: '20px'}}>Το καλάθι σας</span>
                                <span className="badge text"
                                      style={{background: '#e51f1f', fontSize: '20px'}}>Ποσότητα</span>
                            </h4>
                            <ul className="list-group mb-3">
                                {Order_Products}

                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Σύνολο</span>
                                    <strong>{formData.Order_sum}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Στοιχεία Παραγγελίας</h4>
                        <form className="needs-validation" onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Όνομα</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Ονομα"
                                        onChange={handleChange}
                                        value={formData.name}
                                        required/>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-4">
                                    <label htmlFor="address" className="form-label">Αριθμός τραπεζιού</label>
                                    <input
                                        name="Table_No"
                                        type="number"
                                        className="form-control"
                                        id="address"
                                        onChange={handleChange}
                                        value={formData.Table_No}
                                        placeholder="πχ 24" required>
                                    </input>
                                    <div className="invalid-feedback">
                                        Παρακαλώ εισάγεται τον αριθμό που βλέπεται πάνω στο τραπέζι.
                                    </div>
                                </div>

                                <h4 className="mb-3">Πληρωμή</h4>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input
                                            id="credit"
                                            name="Payment_Method"
                                            type="radio"
                                            value="Card"
                                            onChange={handleChange}
                                            className="form-check-input"
                                            checked={formData.Payment_Method === "Card"}>
                                        </input>
                                        <label className="form-check-label" htmlFor="credit">Κάρτα</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit"
                                               name="Payment_Method"
                                               type="radio"
                                               className="form-check-input"
                                               value="Cash"
                                               checked={formData.Payment_Method === "Cash"}
                                               onChange={handleChange}>
                                        </input>
                                        <label className="form-check-label" htmlFor="debit">Μετρητά στον
                                            υπάλληλο</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="paypal"
                                            name="Payment_Method"
                                            type="radio"
                                            className="form-check-input"
                                            value="Paypal"
                                            checked={formData.Payment_Method === "Paypal"}
                                            onChange={handleChange}>
                                        </input>
                                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>
                            </div>
                            <button className="w-100 btn btn-warning btn-lg" type="submit">Ολοκλήρωση παραγγελίας
                            </button>
                        </form>

                    </div>

            </div>
            </body>
        </div>


    )
}