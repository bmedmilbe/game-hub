import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "85b091a9663c49f2aca8d76bb63ac540" },
});
