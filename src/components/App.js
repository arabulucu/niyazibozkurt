import React from "react";
import '../styles.css';
import '../parallax.css';
import Navbar from "./Navbar";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import Sidebar from "./SideBar"




/* const Books = "/img/Books.png";
const Hammer = "Court_Hammer.png";  */


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false }, () => {
                document.querySelector(".loading-bar").classList.add("fade-out");
            });
        }, 2500);
    }


    render() {
        return (
            <div style={{ backgroundColor: "b4b4b4", overflow: "hidden" }}>
                <Navbar />
                <div className="loading-bar" style={{backgroundColor:"#fff"}}>
                    <h2 className="loading-text">Niyazi Bozkurt</h2>
                    <div className="loading-bar-inner"></div>
                </div>
                <Services />
                <Team />
                <Contact />
                <Sidebar />
            </div>
        );
    }
}


export default App;