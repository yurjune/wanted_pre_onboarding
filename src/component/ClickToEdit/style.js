import styled from 'styled-components';
import { primary, gray } from '../Common';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`
const Text = styled.div`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  line-height: ${props => props.lineHeight};
`
const Square = styled.div`
  font-size: 14px;
  line-height: 30px;
  width: 100px;
  height: 30px;
  padding: 0 5px;
  border: 1px solid ${gray};
`
const Input = styled.input`
  width: 100px;
  height: 30px;
  padding: 0 5px;
  border: 1px solid ${primary};
  &:focus {
    outline: ${primary};
  }
`

export {
  Container,
  Box,
  Text,
  Square,
  Input,
}