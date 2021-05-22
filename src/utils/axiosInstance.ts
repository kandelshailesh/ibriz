import Axios from "axios";

const axios = Axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL1,
  baseURL: "https://bikewise.org:443/api/v2",
});

export default axios;
