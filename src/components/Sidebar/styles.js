import styled from 'styled-components';

export const Sidebar = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  background: ${props => props.theme[props.color] || props.theme.primary};
  transition: 0.5s;

  ul li {
    list-style: none;
    color: ${props => props.theme[props.color] || props.theme.secondary};
    font-size: 20px;
    padding: 20px 24px;
  }
`;

export const ToggleBtn = styled.div`
  position: absolute;
  top: 30px;
  left: 330px;
  cursor: pointer;

  span {
    width: 45px;
    height: 4px;
    background: ${props => props.theme[props.color] || props.theme.strong};
    display: block;
    margin-top: 4px;
  }
`;