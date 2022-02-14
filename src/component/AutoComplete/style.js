import styled from 'styled-components';
import { gray } from '../Common';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`
const Input = styled.input`
  width: 90%;
  height: 35px;
  padding: 0 10px;
  border: 1px solid ${gray};
  border-radius: ${props => props.text && props.filtered?.length >= 1 ? "10px 10px 0 0" : "10px"};
  &:focus {
    outline: none;
  }
  :after {
    content: 'X'
  }
`
const Box = styled.div`
  width: 90%;
  padding: 5px 10px;
  font-size: 12px;
  border: 1px solid ${gray};
  border-radius: ${props => props.text && "0 0 10px 10px"};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35px;
`
const KeyWords = styled.div`
  padding: 2px 0;
  :hover {
    background: ${gray};
  }
`

export {
  Container,
  Input,
  Box,
  KeyWords,
}