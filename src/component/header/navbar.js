 import Nav_button from "./Nav_button";
 import { useState } from "react";
 import {Bar, NavMenu, HiddenNav, Nav, LogoBox} from "./headerStyle/ButtonStyle";
 import { Logo } from "./headerStyle/Logo";

 
export const Navbar = () => {

    const [IsClicked, setClicked] = useState(false); 
    
    const SideBar = () =>{
        return setClicked(!IsClicked);       
    }

    return (
    <Nav className={IsClicked? "bg-dark":""}>
        <div style={{height:"14vh"}}>
            <div className="h-100 w-100" style={{paddingRight: "10%", paddingLeft:"10%"}}>      
                <div className="d-flex align-items-center justify-content-between h-100" >
                    <LogoBox className="position-relative h-100 d-flex align-items-center" >  
                        <Logo fill="white"/>        
                    </LogoBox>
                    <Bar icon={IsClicked ? ["fas","times"] : ["fas","bars"]} onClick={SideBar} />
                    <NavMenu >
                        <ul className="d-flex align-items-center justify-content-between p-0 my-0 h-100 w-100" >
                            <Nav_button value="home" link="/" Navbar/>
                            <Nav_button value="about" link="/about" />
                            <Nav_button value="skills" link="/skills" />
                            <Nav_button value="contact" link="/contact" />
                        </ul>
                    </NavMenu>
                </div>
            </div>
        </div>
        <HiddenNav className={IsClicked ? "bg-dark text-white" : "d-none"} >
            <ul className="d-flex flex-column align-items-center justify-content-around p-0 my-0 h-100 w-100" >
                <Nav_button value="home" link="/" funct={SideBar}/>
                <Nav_button value="about" link="/about" funct={SideBar}/>
                <Nav_button value="skills" link="/skills" funct={SideBar}/>
                <Nav_button value="contact" link="/contact" funct={SideBar}/>
            </ul>
        </HiddenNav>
    </Nav>
    
    )
}

export default Navbar;