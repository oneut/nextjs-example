import Firebase from "firebase/app";
import "firebase/database";

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    databaseURL: "https://hacker-news.firebaseio.com"
  });
}
export const api = Firebase.database().ref("/v0");
