import React from 'react';
import IncidentTable from './Table';
import styled from 'styled-components';

interface IIncidentContainer {
  primary?: boolean;
}

const IncidentContainer = styled.div`
  background: ${(props: IIncidentContainer) =>
    props.primary ? 'palevioletred' : 'white'};
  height: 100%;
  width: 100vw;
`;

const Incident: React.FC = () => {
  return (
    <IncidentContainer>
      <IncidentTable />
    </IncidentContainer>
  );
};

export default Incident;
