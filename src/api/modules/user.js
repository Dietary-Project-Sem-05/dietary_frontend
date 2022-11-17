import { axiosClient, resolver } from "../client";

export default {
  logInUser(data) {
    return resolver(axiosClient.post("/user/login", data));
  },
  logOutUser(data) {
    return resolver(axiosClient.post("/user/logout", data));
  },
};
