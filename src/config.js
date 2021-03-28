import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDJ6rx5Es-mUL03_sLmG1zUUJtnKe0jLdo",
  authDomain: "covid-tracker-8a981.firebaseapp.com",
  databaseURL: "https://covid-tracker-8a981.firebaseio.com",
  projectId: "covid-tracker-8a981",
  storageBucket: "covid-tracker-8a981.appspot.com",
  messagingSenderId: "935815542594",
  appId: "1:935815542594:web:3c431b9cef203fbce27adb",
  measurementId: "G-T9Y2PVH1TJ",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
