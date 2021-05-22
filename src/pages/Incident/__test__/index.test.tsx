import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import axios from "axios";
import { fetchIncidents } from "./fetchIncidentList";
import IncidentList from "./incidentlist.json";
import { shallow, mount, render as Erender } from "enzyme";
import Incident from "../index";
import DropDown from "components/Dropdown";
import { Menu } from "antd";
import IncidentFilter, { menu_item } from "../Filter";

afterEach(cleanup);

jest.mock("axios");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));
describe("Incident Page", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("render without crashing", () => {
    const wrapper = shallow(<Incident />);
    expect(wrapper).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const result = renderer.create(<Incident />).toJSON();
    expect(result).toMatchSnapshot();
  });

  it("check api", async () => {
    axios.get.mockResolvedValue({
      data: { incidents: IncidentList },
    });
    const params: Record<string, string> = {
      proximity: "Berlin",
      incident_type: "theft",
    };
    const title = await fetchIncidents(params);
    expect(title).toEqual({
      id: 136247,
      title: "Stolen 2020 Canyon bicycles RDL AL 6.0 19/20 bu/bu(blue)",
      description:
        "Parked in the building courtyard, away from general eyesight. Missing from 14:30 to 18:00",
      address: "Berlin, 10117, DE",
      occurred_at: 1614436200,
      updated_at: 1616857269,
      url: "https://bikewise.org/api/v1/incidents/136247",
      source: {
        name: "BikeIndex.org",
        html_url: "https://bikeindex.org/bikes/1011193",
        api_url: "https://bikeindex.org/api/v1/bikes/1011193",
      },
      media: {
        image_url:
          "https://files.bikeindex.org/uploads/Pu/403441/large_IMG_4353.jpg",
        image_url_thumb:
          "https://files.bikeindex.org/uploads/Pu/403441/small_IMG_4353.jpg",
      },
      location_type: null,
      location_description: null,
      type: "Theft",
      type_properties: null,
    });
  });
});
