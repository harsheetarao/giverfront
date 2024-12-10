import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEtOjh0x7nTwlFdJaQAvgg1_1dpKfiz9g",
  authDomain: "pickup-436017.firebaseapp.com",
  projectId: "pickup-436017",
  storageBucket: "pickup-436017.appspot.com",
  appId: "1:990800642935:web:9e965fd4d9c9cf50505772",
  measurementId: "G-TGRV39M2JC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
