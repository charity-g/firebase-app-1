
document.addEventListener('DOMContentLoaded', function() {
   let firebaseConfig = {
      apiKey: "AIzaSyDxaHh1KWzRzmB9PKnmHfzeNsP8vCbk9Tk",
      authDomain: "fir-app-1-6e06d.firebaseapp.com",
      projectId: "fir-app-1-6e06d",
      storageBucket: "fir-app-1-6e06d.appspot.com",
      messagingSenderId: "52412768213",
      appId: "1:52412768213:web:c3e33c30fbb6b63ce6675c"
    };
   
   try {
   const app = firebase.initializeApp(firebaseConfig);
   const firebase_console = firebase;
   } catch (e) {
      console.error(e);
    }
});

console.log('hello world from app.js')

// console.log(firebase);
// const auth = firebase.auth();

// const whenSignedIn = document.getElementById('whenSignedIn');
// const whenSignedOut = document.getElementById('whenSignedOut');