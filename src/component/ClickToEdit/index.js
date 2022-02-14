import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Box,
  Text,
  Square,
  Input,
} from './style';

const Item = ({ children, value, setValue }) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState('');
  const ref = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, [editMode]);

  const clickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setEditMode(false);
      setValue(text);
    }
  }

  return (
    <Box ref={ref} onClick={() => setEditMode(true)}>
      {!editMode
      ? <>
        <Text lineHeight="30px">{children}</Text>
        <Square>{value}</Square>
      </>
      : <>
        <Text weight="bold" lineHeight="30px">{children}</Text>
        <Input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
      </>
      }
    </Box>
  );
}

const ClickToEdit = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  
  return (
    <Container>
      <Item value={name} setValue={setName}>이름</Item>
      <Item value={age} setValue={setAge}>나이</Item>
      <Text size="14px" weight="bold">{`이름 ${name} 나이 ${age}`}</Text>
    </Container>
  )
};

export default ClickToEdit;