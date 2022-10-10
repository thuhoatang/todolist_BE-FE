import axios from "axios";

// Tạo ra instance

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default httpRequest;
