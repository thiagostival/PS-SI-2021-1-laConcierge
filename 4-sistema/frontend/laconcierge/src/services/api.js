import axios from 'axios';

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: "http://localhost:3333/api",
});

export default api;