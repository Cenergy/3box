import axios from "axios";

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });
  // axios的拦截器
  // 请求拦截
  axiosInstance.interceptors.request.use(
    config => {
      // 修改config以满足服务器要求
      // loading
      // token
      return config;
    },
    err => {
      // eslint-disable-next-line no-console
      console.log("Rd: request -> err", err);
    }
  );
  // reponse 拦截
  axiosInstance.interceptors.response.use(
    res => {
      // eslint-disable-next-line no-console
      console.log("Rd: request -> res", res);
      return res.data;
    },
    err => {
      // eslint-disable-next-line no-console
      console.log("Rd: request -> err", err);
    }
  );

  return axiosInstance(config);
}
