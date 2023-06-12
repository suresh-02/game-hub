import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b0cae69de384749af66d1259ab95c3f",
  },
});
