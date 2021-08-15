import Icon from "./icon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Footer = (props) =>{
    return(
        <div className="absolute-bottom">
            <footer>
                <div className="bg-dark text-light pt-4 pb-3">
                    <div className="container" style={{width:"min(700px, 100%)"}}>
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="mb-2" style={{fontSize: "clamp(1rem, 3vw, 2rem)"}}>Design Beautiful Web by Redo Sains</h1>
                            <p className="text-center" style={{fontSize: "clamp(0.5rem, 1.2vw, 5rem)"}}>
                                Looking for job, Give me a try for working on you company! Fully responsive website design with ReactJs.contact me on email redoxsains@gmail.com or phone +62812345678.
                            </p>
                            <div className="container-fluid">
                                <ul className="list-unstyled d-flex justify-content-center align-items-center m-0">
                                    <Icon icon="facebook-f" HoverColor="#1293d2"/>
                                    <Icon icon="google-plus-g" HoverColor="#DD4B39"/>
                                    <Icon icon="linkedin-in" HoverColor="#0b5e86"/>
                                    <Icon icon="instagram" HoverColor="#E1306C"/>
                                    <Icon icon="github" HoverColor="#5b5959"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary text-light pt-3 pb-2 d-flex justify-content-center">
                    <p style={{fontSize: "clamp(0.5rem, 1.2vw, 5rem)"}}><FontAwesomeIcon icon={["far","copyright"]}/> Copyright 2021 All rights reserved. Created by Redo Sains with ReactJs.</p>
                </div>
            </footer>
            
            
        </div>
    )
}

export default Footer;