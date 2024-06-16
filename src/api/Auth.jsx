import axios from "axios";

const baseUrl = "/api/v1/auth";

export function kakaoLogin() {
  return axios
    .get(baseUrl + "/kakao/login/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
