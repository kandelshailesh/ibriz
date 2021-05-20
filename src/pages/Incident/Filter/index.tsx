import React, { useState } from "react";
import Dropdown from "components/Dropdown";
import Menu, { IMenuItem } from "components/Menu/menu";
import { Button, message, Space } from "antd";
import Filter from "components/Filter";
import { CloseCircleOutlined } from "@ant-design/icons";
import { isMobile } from "react-device-detect";

const menu_item: Array<IMenuItem> = [
  {
    key: "title",
    title: "Title",
  },
  { key: "occurred_at", title: "Occurred Date" },
];

interface Props {
  dataSource: any;
  filter?: boolean;
  setFilter: any;
  setFilterData: any;
}
const IncidentFilter: React.FC<Props> = ({
  dataSource,
  filter,
  setFilter,
  setFilterData,
}) => {
  const [filterBy, setFilterBy] = useState<null | string>("");
  const [filterTitle, setFilterTitle] = useState<null | string>("");
  const [filterDateRange, setFilterDateRange] = useState<Array<number>>([]);

  const onMenuClick = (e: any) => {
    setFilterBy(e.key);
  };

  const menu = <Menu onClick={onMenuClick} item={menu_item}></Menu>;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTitle(e.target.value);
  };
  const handleDateChange = (dates: any) => {
    if (dates) {
      const date1 = dates[0].unix();
      const date2 = dates[1].unix();
      setFilterDateRange([date1, date2]);
    }
  };

  const filterByList: any = [
    {
      placeholder: "Title",
      title: "Title",
      type: "text",
      key: "title",
      onChange: handleTitleChange,
    },
    {
      title: "Occurred Date",
      type: "daterange",
      key: "occurred_at",
      onChange: handleDateChange,
    },
  ];

  const handleClearFilter = () => {
    setFilterBy("");
    setFilter(false);
    setFilterData(dataSource);
  };
  const handleFilter = () => {
    try {
      let filteredData = dataSource;
      switch (filterBy) {
        case "title":
          if (filterTitle) {
            filteredData = dataSource.filter(
              ({ title }: any) =>
                title.toLowerCase().indexOf(filterTitle.toLowerCase()) !== -1,
            );
          } else {
            message.error("Please enter title");
          }
          break;
        case "occurred_at":
          if (filterDateRange.length > 0) {
            filteredData = dataSource.filter(
              ({ occurred_at }: any) =>
                occurred_at >= filterDateRange[0] &&
                occurred_at <= filterDateRange[1],
            );
          } else {
            message.error("Please select occurred date");
          }
          break;
      }
      setFilter(true);
      setFilterData(filteredData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Space size="middle" direction={isMobile ? "vertical" : "horizontal"}>
      <Dropdown overlay={menu}></Dropdown>
      {filterBy && (
        <>
          <Filter {...filterByList.filter((r: any) => r.key === filterBy)[0]} />
          <Space direction={"horizontal"} style={{ marginLeft: 0 }}>
            <Button type="primary" onClick={handleFilter}>
              Filter
            </Button>
            <Button onClick={handleClearFilter} type="link">
              <CloseCircleOutlined />
              Clear Filters
            </Button>
          </Space>
        </>
      )}
    </Space>
  );
};

export default IncidentFilter;
