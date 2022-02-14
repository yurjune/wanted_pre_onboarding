import styled from 'styled-components';
import { primary, gray, white } from '../Common';

const Switch = styled.div`
  align-self: center;
  margin-bottom: 10px;
  width: 70px;
  height: 30px;
  background: ${props => props.toggle ? primary : gray};
  border-radius: 40px;
  position: relative;
  transition: background 0.3s;
  span {
    display: none;
  }
  &:after {
    content: "";
    position: absolute;
    left: ${props => props.toggle ? "calc(100% - 27.5px)" : "2.5px"};
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background: ${white};
    transition: all 0.3s;
  }
`

export {
  Switch,
}