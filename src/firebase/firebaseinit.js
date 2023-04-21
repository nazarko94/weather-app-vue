import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQCoJHlNvsYhVJ_HDUyNRIARIH_V9pHfI",
  authDomain: "weatherappvue-b8f97.firebaseapp.com",
  projectId: "weatherappvue-b8f97",
  storageBucket: "weatherappvue-b8f97.appspot.com",
  messagingSenderId: "920445682871",
  appId: "1:920445682871:web:901aca617ea79d671ab932"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
