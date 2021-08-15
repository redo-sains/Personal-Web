import styled from 'styled-components'


export const AboutBox = styled.div`

    width: 100%;
    height: 70%;
    background-color: rgba(255, 255, 255,0.8);
    backdrop-filter: blur(15px);
    box-shadow: 30px 50px 15px rgba(0,0,0,0.7);

    @media screen and (max-width: 768px){
        height: 75%;
    }

`

export const AboutTitle = styled.h1`

    width: 100%;
    height: 10%;

`

export const AboutText = styled.p`

    font-family: sans-serif;
    width: 40%;
    height: 80%;
    margin-top: 2%;
    font-size: clamp(0.6rem, 1vw, 1rem);
    text-align: justify;
    margin: 0;
    @media screen and (max-width: 768px){
        width: 55%;
        
    }
    @media screen and (max-width: 534px){
        width: 70%;
        
    }

`

export const AboutContainer = styled.div`

    width: 70%;
    height: 100%;
    padding: 2% 4%;
    display: flex;
    align-items: space-around;
    flex-direction: column;
    

    @media screen and (max-width: 768px){
        width: 85%;
        padding: 3% 2%;
    }
    @media screen and (max-width: 534px){
        width: 90%;
        padding: 3% 1%;
    }

`

export const AboutContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        height: 80%;
        flex-direction: column;
        justify-content: space-around;
    }
    @media screen and (max-width: 534px){
        height: 85%;
        
    }


`




