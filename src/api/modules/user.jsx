import { axiosClient, resolver } from "../client";

export default {
  signInUser(data) {
    return resolver(axiosClient.post("/user/login", data));
  },
  signUpUser(data) {
    return resolver(axiosClient.post("/user/signup", data));
  },
  getUser(userId) {
    return resolver(axiosClient.get(`/user/${userId}`));
  },
};
