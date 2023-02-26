import styled from 'styled-components'
import { IRightClickMenu } from '.'

export const Container = styled.ul<IRightClickMenu>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  z-index: 10;

  padding: 10px 0;
  margin: 0;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-width: 100px;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 25px;
    padding: 10px;
    cursor: pointer;
    padding: 16px 8px;
    :hover {
      background: ${(props) => props.theme.colors.border};
      transition: 0.2s;
    }
    &[data-disabled='true'] {
      color: ${(props) => props.theme.colors.disabled};
    }
  }
`
