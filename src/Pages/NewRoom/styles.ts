import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  gap: 20px;

  .containerButtons {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
`

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 15px;

  height: 50px;

  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: 5px;
  background: transparent;

  color: ${(props) => props.theme.colors.color};

  &:hover {
    transition: 0.3s;
    background: #f2f2f2;
  }
`

export const Division = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.border};
`

export const InputRoomCode = styled.input`
  width: 350px;
  height: 50px;

  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: 5px;
  background: transparent;

  margin-bottom: 20px;

  outline: 0;

  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.color};

  padding: 0 20px;
`

export const Logo = styled.img`
  width: 400px;
`
