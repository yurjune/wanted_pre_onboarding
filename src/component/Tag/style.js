import styled from 'styled-components';
import { white, gray } from '../Common';
import { Button as Btn } from '../Common';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid ${gray};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-basis: 36px;
  align-items: center;
  flex-wrap: wrap;
`
const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  margin: 3px 0;
`
const CloseBtn = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: ${white};
  margin-left: 10px;
  color: black;
`
const Button = styled(Btn)`
  height: 30px;
  margin: 3px 5px 3px 0px;
  display: flex;
  align-items: center;
`

export {
  Container,
  Input,
  CloseBtn,
  Button,
}