import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgg8CIYQ4dE9JWd-0GIPilkxue89p7I4",
  authDomain: "userverblist.firebaseapp.com",
  projectId: "userverblist",
  storageBucket: "userverblist.firebasestorage.app",
  messagingSenderId: "521364046945",
  appId: "1:521364046945:web:1a056ba340fc7356431620",
  measurementId: "G-PP7JFH35HW",
  databaseURL: "https://userverblist-default-rtdb.europe-west1.firebasedatabase.app"
};


const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

const auth = getAuth(app);
const database = getDatabase(app);

signInAnonymously(auth)
  .then(() => console.log("Signed in anonymously"))
  .catch((error) => console.error("Auth error", error));

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.firebaseUserId = user.uid;
    window.firebaseDb = database;

    window.firebaseRef = ref;
    window.firebaseSet = set;
    window.firebaseGet = get;

    document.dispatchEvent(new CustomEvent("firebaseReady"));
  }
});


