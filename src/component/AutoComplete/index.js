import React, { useState, useEffect } from 'react';
import {
  Container,
  Input,
  Box,
  KeyWords,
} from './style';

const setId = () => {
  return Math.random().toString(36).substring(2);
}

const AutoComplete = () => {
  const [text, setText] = useState('');
  const [storage, setStorage] = useState([]);
  const [filteredStorage, setfilteredStorage] = useState([]);

  useEffect(() => {
    const arr = storage.filter(item => item.includes(text));
    setfilteredStorage(arr);
  }, [text, storage]);

  const onSubmit = () => {
    if (storage.includes(text)) return setText('');
    setStorage(prev => [...prev, text])
    setText('');
  }

  const onEnter = () => {
    if (window && window.event.keyCode == 13) onSubmit();
  };

  return (
    <Container>
      <Input
        placeholder='check auto complete'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={onEnter}
        text={text}
        filtered={filteredStorage}
      />
      {text && filteredStorage?.length >= 1 && <Box text={text}>
        {filteredStorage.map((item, idx) => (
          <KeyWords key={item + idx} onClick={() => setText(item)}>{item}</KeyWords>
        ))}
      </Box>}
    </Container>
  );
};

export default AutoComplete;