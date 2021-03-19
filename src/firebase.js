import firebase from 'firebase';
import 'firebase/firebase-database';

var firebaseConfig = {
   apiKey: "AIzaSyDfe45jjHqQiByt6iEKCzGWWk7IARltzEE",
   authDomain: "marka-baklava.firebaseapp.com",
   databaseURL: "https://marka-baklava-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "marka-baklava",
   storageBucket: "marka-baklava.appspot.com",
   messagingSenderId: "960320662056",
   appId: "1:960320662056:web:29583560990314b134a31d",
   measurementId: "G-TXTNCL1ZML"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;