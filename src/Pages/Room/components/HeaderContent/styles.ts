import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 50px;
    margin: 20px 30px;
    padding: 10px 15px;

    section{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px
    }
`