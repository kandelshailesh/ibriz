import React from 'react';
import { Menu as AMenu } from 'antd';

export interface IMenuItem {
  key: any;
  title: any;
}

interface Props {
  item: Array<IMenuItem>;
  onClick: (e: any) => void;
}

const Menu: React.FC<Props> = ({ item, onClick }) => {
  return (
    <AMenu onClick={onClick}>
      {item.map(({ key, title }, i) => (
        <AMenu.Item key={key}>
          <span>{title}</span>
        </AMenu.Item>
      ))}
    </AMenu>
  );
};

export default Menu;
