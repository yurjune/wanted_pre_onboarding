import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import Toggle from './component/Toggle';
import {
  Container,
  Box,
  Title,
} from './style'

function App() {
  return (
    <Container>
      <Box>
        <Title>Toggle</Title>
        <Toggle />
      </Box>
      <Box>
        <Title>Modal</Title>
        <Modal />
      </Box>
      <Box justify="inherit">
        <Title>Tab</Title>
        <Tab />
      </Box>
      <Box>
        <Title>Tag</Title>
        <Tag />
      </Box>
      <Box>
        <Title>AutoComplete</Title>
        <AutoComplete />
      </Box>
      <Box>
        <Title>ClickToEdit</Title>
        <ClickToEdit />
      </Box>
    </Container>
  );
}

export default App;
