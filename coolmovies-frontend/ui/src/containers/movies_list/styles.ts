import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
  width: ${({ width }) => width ? width : '100%'};
  display: flex;
  padding: 24px;
  gap: 20px;
  overflow: auto;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;