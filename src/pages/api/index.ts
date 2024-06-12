import Http from "@/utils/http";
const api = {
  test() {
    return Http.get("/api/users");
  },
  postChartBox() {
    return Http.get("/api/users");
  },
};

export default api;
