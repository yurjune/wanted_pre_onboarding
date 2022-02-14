import styled from 'styled-components';
import { white } from '../Common';

const ModalBox = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const ModalBody = styled.div`
  width: 400px;
  height: 150px;
  border-radius: 10px;
  background-color: ${white};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Close = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Text = styled.div`
  color: purple;
  font-size: 20px;
`
export {
  ModalBox,
  ModalBody,
  Close,
  Text,
}