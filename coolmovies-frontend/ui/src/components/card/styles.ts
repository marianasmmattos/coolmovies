import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import User from '../../images/user.png';

export const CardContainer = styled(Container)<{ maxWidth?: string, maxHeight?: string, minWidth?: string, minHeight?: string, width?: string, height?: string }>`
  background: #FFF;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  max-width: ${({ maxWidth }) => maxWidth || '360px'};
  max-height: ${({ maxHeight }) => maxHeight || '460px'};
  min-width: ${({ minWidth }) => minWidth || 'unset'};
  min-height: ${({ minHeight }) => minHeight || 'unset'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const CardImage = styled.img.attrs({
  src: User,
})`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  padding: 5px;
  background: linear-gradient(93deg, #470825 1%, #E91B34 81%, #FF1400 100%);
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const CardSubtitle = styled.h4`
  font-size: 16px;
  font-weight: normal;
  margin-top: 12px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #616161;
  margin-bottom: 20px;
  line-height: 20px;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;