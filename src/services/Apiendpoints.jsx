import api from "../services/api";

export const register = async (data) => {
  return api.post("user/register", data);
};
  
export const login = async (data) => {
  return api.post("user/login", data);
};
  
export const userData = async () => {
  console.log(api.defaults.headers);
  return api.get("user");
};

export const userFeed = async () => {
  return api.get("user/feed");
}