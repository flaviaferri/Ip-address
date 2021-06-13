import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://geo.ipify.org/api/",
});

export default {
  getIp(ip) {
    return axiosInstance
      .get(`v1?apiKey=at_EPlYsCZNLISXPqTJDX2t1K97cJGpQ&ipAddress=${ip}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
