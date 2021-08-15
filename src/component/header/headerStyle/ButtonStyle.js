import styled,{keyframes}from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";


export const NavButton = styled(Link)`
    
    color: white;
    font-size: clamp(1rem, 1.3vw, 5rem);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.8s ease-in;

    &:hover{
        transition: all 0.4s ease-out;
        color: var(--bs-info);
    }
`

export const NavMenu = styled.div`
    width: 60%;
    height: 100%;
    
    @media screen and (max-width:768px){
        display: none;
    }

`

export const Nav = styled.nav`

    position: absolute;
    z-index: 10;
    width: 100vw;
    background-color: transparent;
    transition: all 0.5s ease-in;

`

export const Bar = styled(FontAwesomeIcon)`
    display: none;
    color: #fff;
    transition: all 0.5s ease-in;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-150%, 70%);
        font-size: 1.8rem;
        transition: all 0.5s ease-out;
    }

`
export const HiddenNav = styled.div`
    
    animation-name: ${()=> active()};
    animation-duration: 1s;
    width: 100%;
    height: 50vh;

    
`

const active = () => keyframes`

    from{
            height: 0vh;
        }to{
            height: 50vh;
    }
`

export const LogoBox = styled.div`
    width: 15%;

    @media screen and (max-width: 768px){
        width: 20%;
    }
    @media screen and (max-width: 534px){
        width: 40%;
    }    

`