import { axiosClient, resolver } from "../client";

export default {
  signInUser(data) {
    return resolver(axiosClient.post("/user/login", data));
  },
  signUpUser(data) {
    console.log(data);
    return resolver(axiosClient.post("/user/admin/add-moderator", data));
  },
  getUser(userId) {
    return resolver(axiosClient.get(`/user/${userId}`));
  },
};
