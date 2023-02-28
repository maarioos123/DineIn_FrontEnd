import React from 'react';


export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light site-nav">
            <div className="container-lg">
                <a className="navbar-brand fw-bolder" href="../homepage/homepage.html"><span className="brand-title">Dine In</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <div className="btn-group" role="group">
                        <a href="../login/login.html">
                            <button type="button" className="btn btn-light">Login</button>
                        </a>
                        <a href="../login/registration.html">
                            <button type="button" className="btn btn-danger">Sign Up</button>
                        </a>
                    </div>
                    <a href="../checkout/checkout.html">
                        <button type="button" className="btn btn-light mx-2 my-2">Cart
                            <i className="bi bi-cart4 icon-cart"></i>
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </a>


                </div>
            </div>
        </nav>
    );
}

