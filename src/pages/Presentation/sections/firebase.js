import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyBtCJESbcH19HaEpxlMsAEjZ7cacOjfc7w",
    authDomain: "descred-1ead6.firebaseapp.com",
    databaseURL: "https://descred-1ead6-default-rtdb.firebaseio.com",
    projectId: "descred-1ead6",
    storageBucket: "descred-1ead6.appspot.com",
    messagingSenderId: "418660165237",
    appId: "1:418660165237:web:b7304d5dfab4048536ba3c",
    // measurementId: "G-N5QNB9F1LQ"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
