import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "/listing",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;