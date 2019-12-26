import React, { FC, ReactNodeArray, ReactNode } from 'react';

interface Props {
  children?: ReactNodeArray | ReactNode;
  title: string;
  content: string;
}

const Card: FC<Props> = ({ children, title, content }: Props) => {
  return (
    <div className='icon'>
      <div className='card enter-up'>
        <div className='card-content'>
          <div className='card-title'>{title}</div>
          <h2 className='card-content font-weight-300'>{content}</h2>
          {children && <div className='card-action'>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
