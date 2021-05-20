import React from 'react';
import { Dropdown as ADropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface Props {
  overlay: any;
}

const Dropdown: React.FC<Props> = ({ overlay }) => {
  return (
    <ADropdown trigger={['click']} overlay={overlay}>
      <Button
        className="ant-dropdown-link"
        onClick={(e: any) => e.preventDefault()}
      >
        Filter By <DownOutlined />
      </Button>
    </ADropdown>
  );
};

export default Dropdown;
