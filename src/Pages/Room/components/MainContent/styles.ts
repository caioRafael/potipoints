import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 120px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: center;
    gap: 5px;
    width: 50px;
    height: 70px;

    border: solid 2px ${props => props.style?.borderColor || '#bbbbc4'};
    border-radius: 5px;

    cursor: pointer;
`