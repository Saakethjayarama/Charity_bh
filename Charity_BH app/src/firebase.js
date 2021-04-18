// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCAEDC0IPBG6wq2OXUHxR6gnDh0SvXDlHI",
  authDomain: "charitybh-dc293.firebaseapp.com",
  projectId: "charitybh-dc293",
  storageBucket: "charitybh-dc293.appspot.com",
  messagingSenderId: "620921666149",
  appId: "1:620921666149:web:8546090aad1c06890ae48c",
  measurementId: "G-ZVCBNERB1T",
};

const firebaseApp = firebase.initializeApp(config);
const auth = firebaseApp.auth();
const fstore = firebaseApp.firestore();
const storage = firebaseApp.storage();

export default firebaseApp;

export { firebase, storage, auth, fstore };
