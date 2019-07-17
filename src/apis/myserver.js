import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "localhost";

export default axios.create({
  baseURL: `https://server-citarum.herokuapp.com`
});
