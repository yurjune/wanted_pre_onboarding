import styled from 'styled-components';
import { primary, gray } from '../Common';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: ${gray};
  margin-top: 50px;
  margin-bottom: 40px;
`
const Item = styled.div`
  flex: 1;
  padding: 5px 10px;
  background: ${props => props.selectedIndex === props.index ? primary : gray};
  transition: 0.3s;
`
export {
  Container,
  Item,
}