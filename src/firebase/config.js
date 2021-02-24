import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCG7Xgo30btvEMON7rMLToA3Jytzl_cwh4",
  authDomain: "react-gallery-app-84886.firebaseapp.com",
  projectId: "react-gallery-app-84886",
  storageBucket: "react-gallery-app-84886.appspot.com",
  messagingSenderId: "985121127788",
  appId: "1:985121127788:web:cea261172164832c3b0749",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
