import styled from 'styled-components';

export const Hover = styled.a`
    color: white;
    font-size: clamp(1rem, 2vw, 5rem);
    transition: all 0.5s ease-in;
    &:hover{
        transition: all 0.5s ease-out;
        color: ${props => props.color};
    }
`