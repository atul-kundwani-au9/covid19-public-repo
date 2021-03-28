import React from "react";
import logosm from "../images/logo.gif";
import './../styles/Home.css';
class Footer extends React.Component {
    render() {
        return (

            <div className="footer">
                <br />
                <a href="#">
                    {" "}
                    <img
                        style={{
                            width: "50px",
                            height: "50px",
                            position: "absolute",
                            marginLeft: "33%",
                            marginTop: "-0.5%"
                        }}
                        src={logosm}
                        alt="logo"
                    />
                </a>
                <center>
                    <a
                        href="#"
                        style={{ textDecoration: "none" }}
                    >
                        <p>
                            <b style={{ fontSize: 20 }}>
                                COVID-19 Tracker  
                        </b>
                            <i style={{ fontSize: 14 }}> </i>
                        </p>
                    </a>
                </center>
                <br />

            </div>
        );
    }
}

export default Footer