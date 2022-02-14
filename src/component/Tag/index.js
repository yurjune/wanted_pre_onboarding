import React, { useState } from 'react';
import {
  Container,
  Input,
  CloseBtn,
  Button,
} from './style';

const setId = () => {
  return Math.random().toString(36).substring(2);
}

const Tag = () => {
  const [tagList, setTagList] = useState([]);
  const [text, setText] = useState('');

  const onChangeInput = (event) => setText(event.target.value);

  const onSubmit = () => {
    setTagList(prev => [...prev, { text, id: setId() }]);
    setText('');
  };

  const onEnter = () => {
    if (window && window.event.keyCode == 13) onSubmit();
  };

  const removeItem = (item) => () => {
    const arr = tagList.filter(v => v.id !== item.id);
    setTagList(arr);
  }

  return (
    <Container>
      {tagList.map((item, idx) => (
        <Button key={item.text + idx}>
          {item.text}
          <CloseBtn onClick={removeItem(item)}>X</CloseBtn>
        </Button>
      ))}
      <Input
        placeholder='Press enter to add tags'
        value={text}
        onChange={(event) => onChangeInput(event)}
        onKeyUp={onEnter}
      />
    </Container>
  );
};

export default Tag;