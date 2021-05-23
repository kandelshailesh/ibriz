/* eslint-disable react/display-name */
import React from "react";
import { timestamptoDate } from "utils";
import ShowMoreText from "react-show-more-text";
import { isMobile } from "react-device-detect";
import { IColumn } from "components/Table/Table";

export const columns: Array<IColumn> = [
  {
    key: "id",
    title: "ID",
    dataIndex: "id",
    width: isMobile ? 100 : "5%",
    align: "center",
    fixed: "left",
    render: (record: number): JSX.Element => <b>#{record}</b>,
  },
  {
    key: "title",
    title: "Case Title",
    dataIndex: "title",
    width: isMobile ? 100 : "20%",
    align: "center",
    render: (record: string): JSX.Element =>
      record ? (
        <p style={{ textAlign: "left" }}>
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class"
            expanded={false}
          >
            {record}
          </ShowMoreText>
        </p>
      ) : (
        <p style={{ textAlign: "center", opacity: 0.7 }}>-</p>
      ),
  },
  {
    key: "description",
    title: "Description",
    dataIndex: "description",
    align: "center",
    render: (record: string): JSX.Element =>
      record ? (
        <p style={{ textAlign: "left" }}>
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class"
            expanded={false}
          >
            {record}
          </ShowMoreText>
        </p>
      ) : (
        <p style={{ textAlign: "center", opacity: 0.7 }}>
          Description not available
        </p>
      ),
    width: isMobile ? 200 : "20%",
  },
  {
    key: "theft_date",
    title: "Theft Date",
    dataIndex: "occurred_at",
    align: "center",
    render: (record: number): JSX.Element => (
      <span>{timestamptoDate(record)}</span>
    ),
    width: isMobile ? 100 : "10%",
  },
  {
    key: "reported_date",
    title: "Reported Date",
    dataIndex: "updated_at",
    render: (record: number): JSX.Element => (
      <span>{timestamptoDate(record)}</span>
    ),
    align: "center",
    width: isMobile ? 100 : "10%",
  },
  {
    key: "location",
    title: "Location",
    dataIndex: "address",
    align: "center",
    width: isMobile ? 100 : "10%",
  },
  {
    key: "picture",
    title: "Image",
    render: (record: any): JSX.Element =>
      record.media.image_url_thumb ? (
        <img
          alt="Bike"
          width={isMobile ? 90 : 200}
          height="100"
          src={record?.media?.image_url_thumb}
        />
      ) : (
        <p style={{ textAlign: "center", opacity: 0.7 }}>Image not available</p>
      ),
    width: isMobile ? 100 : "10%",
    align: "center",
  },
];
