import React from "react";
import { Table, Skeleton } from "antd";
import PropTypes from "prop-types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SkeletonTable = (props: any): JSX.Element => {
  const { columns, rowCount }: any = props as [];
  return (
    <Table
      rowKey="key"
      pagination={false}
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `key${index}`,
      }))}
      columns={columns.map((column: any) => {
        return {
          ...column,
          render: function renderPlaceholder() {
            return (
              <Skeleton key={column.dataIndex} title={true} paragraph={false} />
            );
          },
        };
      })}
    />
  );
};

export default SkeletonTable;
