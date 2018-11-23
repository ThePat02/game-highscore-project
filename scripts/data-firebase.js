// Initialize Firebase

//https://firebase.google.com/docs/database/web/read-and-write?authuser=0
var config = {
  apiKey: "AIzaSyDLAKAl0qALxVk8DWn7UHGAcqOetk0H5mY",
  authDomain: "game-highscore-project.firebaseapp.com",
  databaseURL: "https://game-highscore-project.firebaseio.com",
  projectId: "game-highscore-project",
  storageBucket: "",
  messagingSenderId: "636497383005"
};

if (!firebase.apps.length) {
   firebase.initializeApp(config);
}
