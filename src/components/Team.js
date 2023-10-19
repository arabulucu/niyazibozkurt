import React from "react";
import '../styles.css';
import niyazi from "../img/niyazi.jpg"

class Team extends React.Component {


    render() {
        return (
            <div id="about">
                <h2 className="section-heading text-uppercase pt-5" style={{ textAlign: "center"}} >HAKKIMDA</h2>
                <div style={{backgroundColor:"#fff"}} >
                    <div className="container px-5 mt-5" >
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="pt-5 pb-5 pl-1 pr-1"><img className="img-fluid rounded-circle" src={niyazi} alt="..." /></div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="pt-5 pb-5 pl-1 pr-1">
                                    <h2 className="display-4">Av. Arb. Niyazi Bozkurt</h2>
                                    <p style={{ textAlign:"justify", textJustify: "inter-word"}}>2012 yılında Ortadoğu Teknik Üniversitesi (ODTÜ) Elektrik ve Elektronik Mühendisliği Bölümü'nden, 2018 yılında Kırıkkale Üniversitesi Hukuk Fakültesi'nden mezun oldum.
                          Adalet Bakanlığı'na bağlı olarak 33642 sicil numarasıyla arabuluculuk faaliyetleri yürütmekteyim. 
                          Tahkim hak talep uzmanı olarak uluslararası projelerde yer alabilirim.
                        Profesyonel bir proje yöneticisi olarak Petrol&Gaz ve Savunma Sanayi'nde uzun yıllardır çalışmaktayım.
                        Yapay zekanın hukuka uygulanması için çalışmalarıma devam etmekteyim. İleri düzeyde İngilizce bilmekteyim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Team;