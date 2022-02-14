import React, { useState } from 'react';
import {
  Close,
  ModalBox,
  ModalBody,
  Text,
} from './style';
import { Button } from '../Common';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    {isOpen &&
      <ModalBox>
        <ModalBody>
          <Close onClick={() => setIsOpen(false)}>X</Close>
          <Text>Hello Wanted & CodeStates!</Text>
        </ModalBody>
      </ModalBox>
    }
  </>);
};

export default Modal;