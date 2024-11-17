import React from "react";
import '../styles.css';
import '../parallax.css';


class Navbar extends React.Component {

    render() {

        return <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={{ backgroundColor: "#003366" }}>
            <div className="container " style={{ height: "4em" }}>
            <h3 className="logoText">Av. Arb. Niyazi Bozkurt</h3>
                 <div class="alptug">
                    <div class="omer">
                        <a style={{fontWeight: "bolder" }} href="#services">Uzmanlıklar</a>
                        <a style={{ fontWeight: "bolder" }} href="#about">Hakkımda</a>
                        <a style={{ fontWeight: "bolder" }} href="#contact">İletişim</a>
                        </div>
                </div>
            </div>
        </nav>

    }
}

export default Navbar;
