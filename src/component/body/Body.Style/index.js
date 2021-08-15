
import styled, { keyframes } from 'styled-components'
import img from './Bali.jpg'

export const Home = styled.div`
    
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(${img}) ;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    

    @media screen and (max-width: 768px){
        height: 75vh;
        
       
    }
    @media screen and (max-width: 534px){
        height: 62.5vh;
       
    }
    
`


export const Title = styled.h1`

    font-family: cursive;
    font-size: clamp(1.5rem, 5vw, 4rem);
    color : white;
    font-weight: 600;
    width: 100%;
       
`

export const Text = styled.p`

    color : white;
    width: 100%;
    font-size: clamp(0.6rem, 1.5vw, 3rem);
    
`
export const HomeButton = styled.button`

    position:relative;
    
    width: 12%;
    height: 8%; 
    border-radius: 25px;
    background-color: transparent;
    padding: 10px 0px;
    font-size: clamp(0.6rem, 1.3vw, 3rem);
    box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
    margin : 0;
    padding: 0;
    overflow: hidden;
    @media screen and (max-width: 768px){
        width: 14%;
        height: 10%;
    }
    @media screen and (max-width: 534px){
        width: 18%;
        height: 12%;
    }
    
`

export const SpanButton = styled.div`

    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:100%;
    transition: all 1s ease-out;
    z-index: 1;

    &:hover::before{

        animation-name: ${()=> active()};
        animation-duration: 0.5s; 
        width: 100%;
        
        
    }

    &::before{
        position: absolute;
        content: '';
        width: 0;
        height:100%;
        background-color: rgba(13, 110, 253, 0.6);
        transition-duration: 0.8s;
        z-index: -1;
    }
`

const active = () => keyframes`

    from{
            width: 0;
        }to{
            width: 100%;
    }
`
