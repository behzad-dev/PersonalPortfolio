import { FETCH_ALL } from "./types";
import { fakeApi } from "../apis/fakeApi";
export const Fetch_data = () => {
  return { type: FETCH_ALL, payload: fakeApi.mydata };
};
