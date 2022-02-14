import React, { useState } from 'react';
import {
  Switch,
} from './style.js';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onClickToggle = () => {
    if (isToggled == true) return setIsToggled(false);
    setIsToggled(true);
  };

  return (
    <>
      <Switch
        onClick={onClickToggle}
        toggle={isToggled}
      />
      <div>Toggle Switch {isToggled ? "ON" : "OFF"}</div>
    </>
  );
};

export default Toggle;