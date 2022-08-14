import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.style?.width || '300px'};
    height: 50px;

    z-index: 10;
`

export const ButtonDropdown = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    background: transparent;
    border: solid 1px #bbbbc4;
    border-radius: 5px;
    
    color: #29292e;

    padding:  0 30px;
` 

export const ContentOptions = styled.div`
    display: flex;
    flex-direction: column !important;
    width: 100%;
    max-height: 300px;

    background: #fff;
    overflow: auto;
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
`