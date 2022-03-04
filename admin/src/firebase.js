import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC15HYWd95x9ppJRiI3fx9cnl1wxypnaiw",
  authDomain: "netflix-mern-32c6f.firebaseapp.com",
  projectId: "netflix-mern-32c6f",
  storageBucket: "netflix-mern-32c6f.appspot.com",
  messagingSenderId: "353404816196",
  appId: "1:353404816196:web:c4fbb801d9d819c1c66511",
  measurementId: "G-YW7MBE13TM",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
