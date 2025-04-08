import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7df4d9f60bcd46e4a6f31cd0bcadabf9",
  },
});
