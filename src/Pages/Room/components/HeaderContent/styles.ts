import styled from 'styled-components'
import { screens } from '../../../../styles/screens'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 24px 0;
  flex-wrap: wrap;
  gap: 8px;

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`

export const RoomCode = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 16px;

  font-size: ${(props) => props.theme.fontSize.base};
  line-height: 160%;
  padding: 8px 12px;

  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};

  background: transparent;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }

  @media ${screens.laptop} {
    padding: 12px 16px;
  }
`
