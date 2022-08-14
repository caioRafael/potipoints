import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    width: ${ props => props.style?.width || '350px' };
    height: 50px;

    border-radius: 5px;

    background: #0069d9;
    color: #fff;

    &:hover{
        transition: 0.3s;
        opacity: 0.8;
    }
`