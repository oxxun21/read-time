import axios from "axios";
import { BASE_URL } from "../utils/BASE_URL";
import { RESTAPI_KEY } from "../utils/searchAPIKey";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: ` KakaoAK ${RESTAPI_KEY}`,
    "Content-Type": "application/json",
  },
});
