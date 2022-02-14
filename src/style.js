import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px;
`
const Box = styled.div`
  width: 35%;
  height: 250px;
  border: 1px solid #b4b2c6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || "center"};
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`
const Title = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  font-weight: bold;
`

export {
  Container,
  Box,
  Title,
}