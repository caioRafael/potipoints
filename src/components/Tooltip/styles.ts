import styled from 'styled-components'

export const TooltipText = styled.div`
  cursor: pointer;
`
export const TooltipBox = styled.div`
  color: ${(props) => props.theme.colors.color};
  background: ${(props) => props.theme.colors.white};
  border: solid 1px ${(props) => props.theme.colors.color};
  visibility: hidden;
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;

  z-index: 10;

  &:before {
    content: '';
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid ${(props) => props.theme.colors.color};
    transform: rotate(135deg);
  }
`
export const TooltipCard = styled.div`
  margin: 16px;
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    width: 230px;
    padding: 8px 8px;
    border-radius: 4px;

    &:before {
      border-color: transparent transparent
        ${(props) => props.theme.colors.color}
        ${(props) => props.theme.colors.color};
    }
  }
`
