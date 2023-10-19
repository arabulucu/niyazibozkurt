import React, { useState } from 'react';
import '../parallax.css';

function Contact() {

  const handleEmailClick = () => {
    window.location.href = "mailto:av.niyazibozkurt@gmail.com";
  }

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+905077052711");
  }

  function handleCall() {
    window.location.href = 'tel:+90-507-705-27-11';
  }

  const [contactInfo] = useState([
    { title: "e-Posta", value: "av.niyazibozkurt@gmail.com" },
    { title: "Adres", value: "Çankaya / Ankara" },
    { title: "Telefon", value: "+90 507 705 27 11" },
  ]);

  return (

      <div className="page-section" id="contact" style={{ backgroundColor: "#fff", paddingBottom:"0px",marginTop:"5em"}}>
          <div className="row text-center">
            <h2 className="section-heading text-uppercase" style={{color:"#282A3A"}}>İLETİŞİM</h2>
            <h3 className="section-subheading" style={{color:"#282A3A"}}>
              İletişimde Kalalım...
            </h3>
          </div>
        <div className='contIcons'>

          <div className="email">
            <img src="./white-img/email-blue.png" alt="email icon" onClick={handleEmailClick} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
            <h4 onClick={handleEmailClick} style={{ cursor: "pointer", textAlign: "center", marginTop: "1em", color:"#282a3a"}} id="contact">e-Posta</h4>
          </div>

          <div className="whatsapp">
            <img src="./white-img/whatsapp-blue.png" alt="whatsapp icon" onClick={handleWhatsappClick} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
            <h4 onClick={handleWhatsappClick} style={{ cursor: "pointer", textAlign: "center", marginTop: "1em", color:"#282a3a" }} id="contact">WhatsApp</h4>
          </div>

          <div className="telephone">
            <img src="./white-img/phone-call-blue.png" alt="telephone icon" onClick={handleCall} style={{ maxHeight: "50px", maxWidth: "50px", cursor: 'pointer' }} />
            <h4 onClick={handleCall} style={{ cursor: "pointer", textAlign: "center", marginTop: "1em", color:"#282a3a" }} id="contact">Arama</h4>
          </div>
        </div>

        <iframe title='Niyazi Bozkurt' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3965.6585315095713!2d32.7531373639429!3d39.90531204913471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1684064586583!5m2!1str!2str"
          style={{
            width: "100%", height: "450px", style: "border:0",
            allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
            marginBottom: "1em"
          }}
        ></iframe>

        <div style={{padding:"2em"}}>
          {contactInfo.map((info, index) => (
            <div key={index} className="row" style={{ width: "700px", display: "flex", marginLeft: "auto", marginRight: "auto", maxWidth:"100%"}}>
              <div className="col-5" style={{position:"relative", right:"0px", /* borderBottom: "1px solid", paddingBottom: "5px", borderBottomStyle:"dashed" */}}>
                <p className="" style={{fontSize:"18px", fontWeight: "bold",marginBottom:"5px", color:"#282a3a"/*, fontStyle:"italic" */}}>{info.title}:</p>
              </div>
              <div className="col-7" style={{wordWrap: "break-word", }}>
                <p className="" style={{fontSize:"18px", fontWeight: "4px",marginBottom:"5px", color:"#282a3a"/*, fontStyle:"italic"*/}}>{info.value}</p>
              </div>
            </div>
          ))}
        </div>



      </div>
  );
}

export default Contact;
