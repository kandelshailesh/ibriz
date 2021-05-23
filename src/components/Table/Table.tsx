import * as React from "react";
import { Table as ATable, Spin, ConfigProvider, Empty } from "antd";
import { isMobile } from "react-device-detect";

export interface IColumn {
  key?: string;
  title?: string;
  dataIndex?: string;
  render?: (_: any) => JSX.Element;
  align?: string;
  width?: string | number;
  fixed?: string;
}

interface Props {
  columns: Array<any>;
  dataSource: Array<any>;
  total: number;
  loading: boolean;
}

const Table: React.FC<Props> = ({ columns, total, dataSource, loading }) => {
  const onPagechange = (val: any) => {
    console.log("Page", val);
  };

  const pagination: any = {
    total: total,
    onChange: onPagechange,
    pageSize: 10,
    defaultCurrent: 1,
    showTotal: (total: number, range: Array<number>) =>
      `${range[0]}-${range[1]} of ${total} items`,
    position: ["bottomRight"],
  };

  return (
    <ConfigProvider
      renderEmpty={() =>
        loading ? (
          <span></span>
        ) : (
          <Empty description={"No any incidents found"} />
        )
      }
    >
      <ATable
        size={"small"}
        pagination={dataSource.length > 0 ? pagination : {}}
        dataSource={dataSource}
        columns={columns}
        scroll={isMobile ? { x: 300 } : {}}
        // locale={{ emptyText: loading ? '' : 'No any data in the list' }}
        loading={{
          indicator: <Spin style={{ marginTop: 30 }} />,
          spinning: loading ? true : false,
        }}
        rowKey="id"
      ></ATable>
    </ConfigProvider>
  );
};

export default Table;
