import React from "react";
import '../styles.css';
import plus from "../img/plus-white.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../parallax.css';

class ServiceCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleShow = () => this.setState({ show: true });
    handleClose = () => this.setState({ show: false });

    componentDidMount() {
        // console.log(this.props.contentImage)
    }

    

    

    render() {
        return <>
                <div className="col-lg-4 col-sm-6">
                    <Button variant="btn-primary-outline" onClick={this.handleShow}>
                        <div className="container1 serviceButton row ">
                            <div className="card ">
                                <div className="front ">
                                    <img className="auction shadow" src={this.props.image} alt="..." />
                                </div>
                                <div className="back">
                                    <img className="plus shadow" src={plus} alt="..." />
                                </div>
                            </div>
                        </div>

                    </Button>
                    <div className="textStyle row">
                        <p style={{fontWeight:"bolder", fontSize:"20px"}} className="textStyleP mt-3 pb-4">{this.props.service}</p>
                    </div>
                </div>
            

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header style={{backgroundColor:"#003366", color:"white"}} closeButton>
                    <Modal.Title style={{paddingLeft:"10px",}}>{this.props.contentHeader}</Modal.Title>
                </Modal.Header>
                <div className="modalDiv">
                <img className="modalImage" src={this.props.contentImage} alt="..."/>
                </div>
                <Modal.Body style={{whiteSpace: "pre-line",paddingLeft:"30px", paddingRight:"30px", textAlign:"justify", textJustify: "inter-word"}}>{this.props.content}</Modal.Body>
                <Modal.Body style={{whiteSpace: "pre-line",paddingLeft:"30px", paddingRight:"30px",}}>{this.props.contentList}</Modal.Body>
                <Modal.Footer>
                    <Button className="modalButton" style={{backgroundColor:"#003366", border:"none"}} variant="secondary" onClick={this.handleClose}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}

export default ServiceCard;