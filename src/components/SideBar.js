import React from "react";
import '../parallax.css';

function Sidebar() {

    const handleEmailClick = () => {
        window.location.href = "mailto:av.niyazibozkurt@gmail.com";
    }

    const handleWhatsappClick = () => {
        window.open("https://wa.me/+905077052711");
    }

    function handleCall() {
        window.location.href = 'tel:+90-5077052711';
    }

    return (
        <div className="containerButSide">
            <button className="btn btn-primary sidebarButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <p className="buttonText">İletişim</p>    
            </button>

            <div className="offcanvas offcanvas-start canvasStyle" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="contIconsSide">
                    <div className="email">
                        <img src="./white-img/email-blue.png" alt="email icon" onClick={handleEmailClick} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
                    </div>

                    <div className="whatsapp">
                        <img src="./white-img/whatsapp-blue.png" alt="whatsapp icon" onClick={handleWhatsappClick} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
                    </div>

                    <div className="telephone">
                        <img src="./white-img/phone-call-blue.png" alt="telephone icon" onClick={handleCall} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>

    
    )

}

export default Sidebar;