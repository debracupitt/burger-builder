import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-5e7af.firebaseio.com/"
});

export default instance;
