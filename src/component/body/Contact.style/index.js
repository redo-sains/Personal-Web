import styled from 'styled-components'
import img from './background-contact.jpg'

export const ContactBox = styled.div`

    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        height: 80%;
        
    }
    @media screen and (max-width: 534px){
        height: 80%;
    }

    

`
export const ContactTitle = styled.h1`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    font-family: cursive;

`
export const ContactCardBox = styled.div`

    width: 100%;
    height: 80%;

    @media screen and (max-width: 768px){
        
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    @media screen and (max-width: 534px){
        
        
    }
    

`

export const ContactCard = styled.div`

    height: 100%;
    width: 20%;
    @media screen and (max-width: 768px){
        width: 40%;
    }
    @media screen and (max-width: 534px){
        width: 60%;
    }

`

export const CardLogo = styled.div`

    height: 75%;

`

export const CardText = styled.h1`

    font-size: 15px;
    color: white;
    margin: 0;
    height: 25%;
    
    
`

export const BoxLogo = styled.div`

    transition: all 1s ease-out;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
                
    background-color: rgba(255,255,255,0.1);
    
    backdrop-filter: blur(5px);
    border-radius: 5px;
    transform: skew(30deg, -5deg);
    box-shadow: 
                -40px 30px 10px rgba(0,0,0,0.6);

    &:hover {
        transition: all 0.2s ease-in;
        transform: skew(0deg, 0deg);
        border-top: 1px solid rgba(255,255,255,0.5); 
        border-left: 1px solid rgba(255,255,255,0.5);
        box-shadow: 
                -10px 10px 10px rgba(0,0,0,1),
                -20px 20px 10px rgba(0,0,0,0.5),
                -30px 30px 10px rgba(0,0,0,0.3);
        border-radius: 15px;
    }

    width: 60%;
    height: 60%;
    
    

`


export const ContactBg = styled.div`

    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 768px){
        height: 250vh;
    }

`
