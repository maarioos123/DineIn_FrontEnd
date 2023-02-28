import React from "react";

export default function Footer() {
    return(
    <div className="footer">
        <footer
            className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top site-footer">
            <p className="col-md-4 mb-0"><span className="footer-title">© 2021 DineIn, Inc</span></p>


            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2"><span className="footer-link">Home</span></a>
                </li>
                <li className="nav-item"><a href="#" className="nav-link px-2"><span
                    className="footer-link">Pricing</span></a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2"><span className="footer-link">FAQ</span></a>
                </li>
                <li className="nav-item"><a href="#" className="nav-link px-2"><span
                    className="footer-link">About</span></a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2"><span className="footer-link">Terms & Conditions</span></a>
                </li>
            </ul>
        </footer>
    </div>
    )
}