import React from "react";
import "../styles.css"
import ServiceCard from "./ServiceCard";



class Services extends React.Component {

    state = {
        services: [
            {
                header: "Arabuluculuk",
                image: "./white-img/mediation.png",
                contentHeader: "Arabuluculuk",
                contentImage: "./img/niyazi1.jpg",
                content: `Adalet Bakanlığı Arabuluculuk Daire Başkanlığı'na bağlı olarak 33642 sicil numaralı arabulucuyum. Şahıslar ve tüzel kişiler için zorunlu ve ihtiyari arabuluculuk görevini yerine getirebilirim.

                Arabuluculuk kapsamında başlıca uzmanlık alanlarım şu şekildedir:`,
                contentList: `• İş hukuku uyuşmazlıkları
                •   Tüketici hukuku uyuşmazlıkları
                •   Ticaret hukuku uyuşmazlıkları
                •   Uzmanlık gerektirmeyen tüm arabuluculuk kapsamındaki uyuşmazlıklar
                • Genel anlamda arabuluculuk
                `
            },
            {
                header: "Proje Yönetimi ve Hukuk",
                image: "./white-img/family.png",
                contentHeader: "Proje Yönetimi ve Hukuk",
                contentImage: "./img/niyazi1.jpg",
                content: `Mühendislikte 10 yıldan fazladır süregelen profesyonel proje yönetim tecrübemi hukukla birleştiriyorum. Bu sayede hukukta verimliliğin artacağını düşünüyorum.
                
                Bu kapsamda uzmanlıklarım şu şekildedir:`,
                contentList: `•	Paydaş yönetimi
                •	Zaman yönetimi
                •	Maliyet yönetimi
                • Risk yönetimi`
                
            },
            {
                header: "Yapay Zeka ve Hukuk",
                image: "./white-img/computer.png",
                contentHeader: "Yapay Zeka ve Hukuk",
                contentImage: "./img/niyazi1.jpg",
                content: `Yapay zeka ve hukukun birleşimini sağlamaya yönelik çalışmalarım devam ediyor.
                
                Bu kapsamda uzmanlıklarım şu şekildedir:`,
                contentList: `•	Yapay zeka veri serileri oluşturulması ve düzenlenmesi
                •	Yapay zeka modelleri oluşturulması
                •	Oluşturulan sistemlerin devreye alınması
                • Avukatlık Ücret Hesaplaması`
                
            },
            {
                header: "Mühendislik ve Hukuk",
                image: "./white-img/computer.png",
                contentHeader: "Mühendislik ve Hukuk",
                contentImage: "./img/niyazi1.jpg",
                content: `Uzun yıllar edinilen petrol&gas ve savunma sanayi mühendislik tecrübesi hukuk ile birleşmektedir.
                Bu kapsamda uzmanlıklarım şu şekildedir:`,
                contentList: `•	Sözleşme Yönetimi
                •	Profesyonel Proje Yönetimi
                •	Fikri Haklara Uygunluk Denetimi
                `
            },
            {
                header: "Avukatlık",
                image: "./white-img/family.png",
                contentHeader: "Avukatlık",
                contentImage: "./img/niyazi1.jpg",
                content: `İlgi alanıma giren hukuk türleri:`,
                contentList: `              
                •	Enerji Hukuku,
                • Spor Hukuku
                •	Bilişim Hukuku,
                •	İş Hukuku,
                •	Kişisel Verilerin Korunması Hukuku,
                •	Yapay Zeka Hukuku,
`,
            },
            {
                header: "Tahkim",
                image: "./white-img/media.png",
                contentHeader: "Tahkim",
                contentImage: "./img/niyazi1.jpg",
                content: `Uluslararası inşaat sözleşmelerinde sertifikalı hak talep uzmanıyım.
                Tahkim ve hak talebi kapsamında başlıca uzmanlıklarım şu şekildedir: `,
                contentList: `                • Sözleşme kurulması ve yönetimi
                •	Hak talebi hazırlanması ve süreç yönetimi
                • Tahkimde taraf vekilliği
                `

            },
        ]
    }



    render() {
        return <>
            <section className="page-section aboutSection mt-5" id="services" style={{ backgroundColor: "#fff" }}>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="section-heading text-uppercase"></h2>
                        <h3/* className="loading-text2"*/>
                        Yapay Zeka ve Proje Yönetimi<br />ile <br /> Yeni Nesil Hukuk<br /> <br /></h3>
                        {this.state.services.map((data, i) => (

                            <ServiceCard key={i} service={data.header} image={data.image} content={data.content}
                                contentImage={data.contentImage} contentHeader={data.contentHeader} contentList={data.contentList} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    }

}


export default Services;