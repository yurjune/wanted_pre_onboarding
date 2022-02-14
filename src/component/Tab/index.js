import React, { useState } from 'react';
import {
  Container,
  Item,
} from './style';

const tabList = ["Tab1", "Tab2", "Tab3"];

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState(false);

  return (<>
    <Container>
      {tabList.map((item, idx) => (
        <Item
          key={item + idx}
          onClick={() => setSelectedTab(idx + 1)}
          index={idx + 1}
          selectedIndex={selectedTab}
        >
          {item}
        </Item>
      ))}
    </Container>
    <div>Tab menu {selectedTab}</div>
  </>);
};

export default Tab;