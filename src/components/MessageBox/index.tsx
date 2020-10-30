import React from 'react';

import * as S from './styled';

type MessageBoxProps = {
  title: string;
  description: string;
  footerText: string;
  icon: string;
  imageDescription?: string;
};

const MessageBox = ({
  title,
  description,
  footerText,
  icon,
  imageDescription,
}: MessageBoxProps) => {
  return (
    <S.Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={imageDescription} />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </S.Container>
  );
};

export default MessageBox;
