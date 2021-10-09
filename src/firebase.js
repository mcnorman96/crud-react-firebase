import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyB4VwDKW0vXb_omUE7JdP6JfEkSzhJ4vjE",
  authDomain: "movieprototype.firebaseapp.com",
  databaseURL: "https://movieprototype.firebaseio.com",
  projectId: "movieprototype",
  storageBucket: "movieprototype.appspot.com",
  messagingSenderId: "496661360704",
  appId: "1:496661360704:web:199c913c73668ef51c6fa5",
};

firebase.initializeApp(config);

export default firebase.firestore();
