import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq7X2qDguFVuwPapB08GQq_aN91Ou14aw",
  authDomain: "auth-staart-41484.firebaseapp.com",
  projectId: "auth-staart-41484",
  storageBucket: "auth-staart-41484.appspot.com",
  messagingSenderId: "136154832333",
  appId: "1:136154832333:web:d812cc6030d81af56e7884",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
