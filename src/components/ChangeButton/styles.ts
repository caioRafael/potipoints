import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    width: ${ props => props.style?.width || '350px' };
    height: 50px;

    border: solid 1px #bbbbc4;
    border-radius: 5px;

    background: transparent;
    color: #0069d9;

    &:hover{
        transition: 0.3s;
        opacity: 0.8;
    }
`