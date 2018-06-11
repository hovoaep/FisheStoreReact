import Reabase from "re-base";
import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey:     "AIzaSyAzPX0xiWBzVTAEsB7FfoTUI9GYCzLS590",
    authDomain: "react-shop-c23da.firebaseapp.com",
    databaseURL: "https://react-shop-c23da.firebaseio.com",
})


const base = Reabase.createClass(firebaseApp.database())

export { firebaseApp };

export default base;