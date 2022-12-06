import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-smooth: antialiased;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.color};
  }
  
  body, input, button {
    font: 500 1rem "Roboto", sans-serif;
  }
  
  p, span{
    font: 400 1rem "Roboto", sans-serif;
  }
  button{
    border: none;
    cursor: pointer;
  }  
`