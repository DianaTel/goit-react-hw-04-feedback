import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  text-transform: capitalize;
  width: 100px;
  padding: 10px;
  font-size: 16px;
  background-color: #c7b9fb;
  &:hover {
    background-color: #82f5f5;
  }
`;
