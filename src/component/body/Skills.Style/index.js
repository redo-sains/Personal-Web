import React from 'react'
import styled, { keyframes } from 'styled-components'
import img from './Skill.png'


export const Skill = styled.div`

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.75)),url(${img}) ;

`

export const SkillBox = styled.div`

    padding: 0;
    margin: 0;
    width: 60%;
    border-radius: 10px;
    background-color: rgba(68,104,204,0.75);
    @media screen and (max-width: 768px){
        width: 80%;
    }
    @media screen and (max-width: 534px){
        width: 90%;
    }
    

`

export const SkillComp = styled.div`

    width: 80%;
    

`

export const Bar = styled.div`

    height: 5px;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
    transition: width 0.5s ease-in-out;
    

`

const animationProgress = (width) => keyframes`

    from{
        width: 0;
    }to{
        width: ${width}%;
    }
`

export const BarPercentage = styled.div`
    height: 100%;
    background-color: cyan;
    box-shadow: 0 0px 8px cyan;
    border-radius: 10px;
    animation-name: ${props => animationProgress(props.percentageProps) };
    width: ${props => props.percentageProps}%;
    animation-duration: 3s;
    
`

export const Percentage = styled.p`

    font-size: clamp(0.6rem, 1.5vw, 3rem);
    position: absolute;
    top: 25%;
    right: 0;
`

export const SkillTitle = styled.p`

    font-size: clamp(0.6rem, 1.5vw, 3rem);
    margin-bottom: 1%;
`