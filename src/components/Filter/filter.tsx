import React from 'react';
import { Space, Input, DatePicker } from 'antd';
import { isMobile } from 'react-device-detect';

interface Props {
  placeholder?: string;
  type: string;
  onChange?: () => void;
  title?: string;
}

const Filter: React.FC<Props> = ({ placeholder, title, type, onChange }) => {
  console.log(placeholder, title, type, onChange);
  const getComponent = (type: string) => {
    switch (type) {
      case 'text':
        return (
          <Space size='middle' direction={'horizontal'}>
            <label>{title}</label>
            <Input
              allowClear
              placeholder={placeholder}
              onChange={onChange}
            ></Input>
          </Space>
        );
      case 'daterange':
        return (
          <Space size='middle' direction={'horizontal'}>
            <label>Occured Date</label>
            <DatePicker.RangePicker
              onChange={onChange}
              style={{ width: isMobile ? '80%' : '' }}
            ></DatePicker.RangePicker>
          </Space>
        );
    }
  };
  return <>{getComponent(type)}</>;
};

export default Filter;
