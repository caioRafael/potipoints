import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
    gap: 20px;

    width: 100%;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: center;
    gap: 5px;
    width: 80px;
    height: 100px;

    border: solid 1px #bbbbc4;
    border-radius: 5px;
`