import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalOverlay = styled(Dialog.DialogOverlay)`
  background: ${(props) => props.theme.colors.zinc[900]};
  position: 'fixed';
  inset: 0;
  width: 100%;
  height: 100%;
`
