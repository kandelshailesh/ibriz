import React from 'react';
import { Spin } from 'antd';

import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader: React.FC = () => {
  return (
    <Container>
      <Spin></Spin>
    </Container>
  );
};

export default Loader;
