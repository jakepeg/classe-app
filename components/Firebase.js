import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9rJvRvpWTEJ1wtglkeqA_rDwHoBOoXwU",
  authDomain: "classe-app.firebaseapp.com",
  projectId: "classe-app",
  databaseURL: "https://classe-app.firebaseio.com",
  storageBucket: "rclasse-app.appspot.com"
};

// firebase.initializeApp(firebaseConfig);

// export default firebase;

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings(settings);

export default firebase;
