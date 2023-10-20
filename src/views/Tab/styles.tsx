import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #4c4c4c;
  width: 100%;
  display: flex;
  box-shadow: 5px 5px 10px grey;
  padding: 5px;
`;

export const TabItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100px;
  border: none;
  height: 50px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  &:hover {
    background-color: #c3c3c3;
  }
`;

export const TabBtn = styled.button`
  height: 30px;
  margin-left: auto;
`;
