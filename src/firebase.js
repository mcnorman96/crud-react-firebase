import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyDVvhlJ-SzTrV9zNcUBO7YBOxpU7jGDCUg",
  authDomain: "testing123-d7f7d.firebaseapp.com",
  databaseURL: "https://testing123-d7f7d-default-rtdb.firebaseio.com",
  projectId: "testing123-d7f7d",
  storageBucket: "testing123-d7f7d.appspot.com",
  messagingSenderId: "544452169142",
  appId: "1:544452169142:web:94670252ff22c4dd72c517"
};

firebase.initializeApp(config);

export default firebase.firestore();
