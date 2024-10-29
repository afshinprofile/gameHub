import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e36c47b03e744bb0a58c67204f0a9ec2",
  },
});
