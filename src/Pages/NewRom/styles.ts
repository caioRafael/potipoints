import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;

    gap: 20px
`

export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 15px;

    width: 350px;
    height: 50px;

    border: solid 1px #bbbbc4;
    border-radius: 5px;
    background: transparent;

    color: #29292e;

    &:hover{
        transition: 0.3s;
        background: #f2f2f2;
    }
`

export const Division = styled.p`
    font-size: 15px;
    color: #bbbbc4;
`

export const InputRoomCode = styled.input`
    width: 350px;
    height: 50px;

    border: solid 1px #bbbbc4;
    border-radius: 5px;
    background: transparent;

    outline: 0;

    font-size: 15px;
    font-weight: 500;
    color: #29292e;
    
    padding: 0 20px;

    cursor: pointer;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    width: 350px;
    height: 50px;

    border-radius: 5px;
    margin-top: 20px;

    background: #0069d9;
    color: #fff;

    &:hover{
        transition: 0.3s;
        opacity: 0.8;
    }
`