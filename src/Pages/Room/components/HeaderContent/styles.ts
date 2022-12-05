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
    flex-wrap: wrap;

    section{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px
    }
`

export const RoomCode = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 15px;
    width: ${ props => props.style?.width || '250px' };
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