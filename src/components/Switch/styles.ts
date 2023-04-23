import * as Switch from '@radix-ui/react-switch'
import styled from 'styled-components'

export const SwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px ${(props) => props.theme.colors.elements};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  border: 1px solid ${(props) => props.theme.colors.borderLight};

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.background};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.colors.background};
  }
`
export const SwitchThumb = styled(Switch.Thumb)`
  position: relative;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px ${(props) => props.theme.colors.elements};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;

  div {
    transition: transform 0.9s;
    display: flex;
  }

  &:not([data-state='checked']) {
    transform: rotate(0deg);
  }

  &[data-state='checked'] {
    transform: translateX(19px);

    div {
      transform: rotate(360deg);
    }
  }
`
