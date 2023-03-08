import React from "react";
import "../styles/Footer.css";
import logo1 from "../images/Logotype_2.svg";

function Footer() {

    return (
        <footer>
            <small className="text-footer1">+ 7 (8352) 20-12-09, @telegram</small>
            <img className="logo1" src={logo1} alt="логотип" />

            <small className="text-footer2">Мой Силант 2022</small>
        </footer>
    )
}

export default Footer;