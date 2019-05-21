import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9rJvRvpWTEJ1wtglkeqA_rDwHoBOoXwU",
  authDomain: "classe-app.firebaseapp.com",
  databaseURL: "https://classe-app.firebaseio.com",
  storageBucket: "rclasse-app.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
