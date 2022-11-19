import { axiosClient, resolver } from "../client";

export default {
  getAllFoods() {
    return resolver(axiosClient.get("/food/moderator/dashboard"));
  },
  updateState() {
    return resolver(axiosClient.post("/food/moderator/dashboard"));
  },
};
