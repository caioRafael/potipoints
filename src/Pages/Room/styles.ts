import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
`
export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;

    background: #0069d9;
    color: #fff;

    padding: 10px 20px;
`

export const UserContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const IconButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
`