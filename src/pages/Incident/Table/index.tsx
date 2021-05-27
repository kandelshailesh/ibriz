import React, { useEffect, useState } from "react";
import Table from "components/Table";
import { columns } from "./column";
import { fetchIncidents } from "utils/index";
import Filter from "../Filter";
import { message, Space } from "antd";
import styled from "styled-components";
import Loader from "components/Loader";
import SkeletonTable from "components/TableSkeleton";
import SkeletonButton from "antd/lib/skeleton/Button";

export interface IIncidentList {
  title: string;
  description: string;
  occurred_at: string;
  reported_at: string;
  media?: any;
}

export interface IParams {
  proximity: string;
  incident_type: string;
}
const IncidentTableContainer = styled.div`
  display: block;
  width: 80%;
  height: 100%;
  margin: 0px auto;
  padding: 10px;
  @media screen and (max-width: 700px) {
    width: 100% !important ;
  }
`;

const IncidentTable: React.FC = (): JSX.Element => {
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterbiketheftList, setFilterBikeTheftList] = useState<Array<any>>(
    [],
  );
  const [biketheftList, setBikeTheftList] = useState<Array<any>>([]);
  const [filter, setFilter] = useState(false);
  const [area, setArea] = useState("Berlin");

  const getTotal = async () => {
    try {
      const params: Record<string, string> = {
        proximity: area,
        incident_type: "theft",
      };
      const result: any = await fetchIncidents(params);
      setBikeTheftList(result?.incidents);
      setFilterBikeTheftList(result?.incidents);
      setLoading(false);
      setTotal(result?.incidents?.length);
    } catch (err) {
      setLoading(false);
      message.error("Error while fetching data");
    }
  };

  useEffect(() => {
    getTotal();
  }, []);

  if (loading) {
    return (
      <IncidentTableContainer>
        <Space style={{ width: "100%" }} direction="vertical" size="middle">
          <SkeletonButton shape="square"></SkeletonButton>
          <SkeletonTable rowCount={10} columns={columns} />
        </Space>
      </IncidentTableContainer>
    );
  }

  return (
    <IncidentTableContainer>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Filter
          filter={filter}
          setFilter={setFilter}
          dataSource={biketheftList}
          setFilterData={setFilterBikeTheftList}
        />
        <Table
          total={total}
          dataSource={filter ? filterbiketheftList : biketheftList}
          columns={columns}
          loading={loading}
        ></Table>
      </Space>
    </IncidentTableContainer>
  );
};

export default IncidentTable;
