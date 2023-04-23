import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

export const Spinner = styled.div`
  border: 5px solid ${(props) => props.theme.colors.border};
  border-top: 5px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  height: 100px;
  width: 100px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
