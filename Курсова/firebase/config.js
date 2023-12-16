// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYKhcUu2pQ8k_p0fziYsKlyPHeyftb52U",
    authDomain: "project-46af9.firebaseapp.com",
    projectId: "project-46af9",
    storageBucket: "project-46af9.appspot.com",
    messagingSenderId: "779888371054",
    appId: "1:779888371054:web:deb69ff4064820bb420d7f",
    measurementId: "G-QL2E13H2F8"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  
  var provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
  
  
  
  
  