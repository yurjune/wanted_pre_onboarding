import styled from 'styled-components';

// custom colors
export const primary = "#ffaa55";
export const gray = "#d3d3d3";
export const white = "#fff";

// components
export const Button = styled.button`
  padding: 8px 10px;
  background-color: ${primary};
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(255, 170, 85, 0.25); /* x축 y축 blur color*/
  cursor: pointer;
  transition: 0.3s;
  &:focus {
    outline: solid;
  }
  &:hover {
    background-color: rgba(255, 170, 85, 0.9);
    box-shadow: 0 2px 4px rgba(255, 170, 85, 0.5);
  }
  display: flex;
  margin-right: ${props => props.mr};
`