// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBioz4icAsSGE_U3DmXewebw3s1Qg-6PsU",
  authDomain: "the-book-spot-ab708.firebaseapp.com",
  projectId: "the-book-spot-ab708",
  storageBucket: "the-book-spot-ab708.appspot.com",
  messagingSenderId: "564938434685",
  appId: "1:564938434685:web:601ce421131e4b51ffe914"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;