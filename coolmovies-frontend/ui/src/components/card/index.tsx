import React from 'react';
import { CardContainer, CardContent, CardImage, CardText, CardTitle, CardSubtitle } from './styles';

interface CardProps {
  title: string,
  image?: string,
  text?: string,
  subtitle?: string,
  showImage?: boolean,
  size?: {
    maxWidth?: string,
    maxHeight?: string,
    minWidth?: string,
    minHeight?: string,
    height?: string,
    width?: string
  }
}

const Card: React.FC<CardProps> = ({ children, title, image, text, subtitle, showImage, size }) => {
  const isImageVisible = showImage;

  return (
    <CardContainer {...size}>
      <CardContent>
        {isImageVisible && <CardImage src={image} />}
        <CardTitle>
          {title}
          {subtitle && <CardSubtitle> {subtitle} </CardSubtitle>}
        </CardTitle>
        { text && <CardText>{text}</CardText> }
        {children}
      </CardContent>
    </CardContainer>
  )
}

export default Card;