import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 24px 16px;
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
  gap: 16px;
  height: 50px;

  border: solid 1px ${props => props.theme.colors.border};
  border-radius: 5px;

  background: transparent;
  color: ${props => props.theme.colors.primary};

  &:hover{
    transition: 0.3s;
    opacity: 0.8;
  }
`