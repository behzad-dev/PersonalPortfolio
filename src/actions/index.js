import { FETCH_ALL, SEND_FEEDBACK } from "./types";
import { fakeApi } from "../apis/fakeApi";
import { db } from "../apis/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
export const Fetch_data = () => {
  console.log("fetch");
  return { type: FETCH_ALL, payload: fakeApi.mydata };
};
export const Create_data = (
  name = " ",
  email = " ",
  content = " ",
  like = " "
) => async (dispatch) => {
  const usersCollectionRef = collection(db, "users"); //grabing users collection from db
  console.log("a🚀 ~ file: index.js ~ line 22 ~ like", like);
  const response = await addDoc(usersCollectionRef, {
    name: name,
    email: email,
    content: content,
    like: like,
  });
  dispatch({ type: SEND_FEEDBACK, payload: response.data });
};
