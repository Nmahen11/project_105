// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyASiA6caznIwyev0M0vi67TAYHL_HW_lnc",
    authDomain: "letschatapp-a4a67.firebaseapp.com",
    databaseURL: "https://letschatapp-a4a67-default-rtdb.firebaseio.com",
    projectId: "letschatapp-a4a67",
    storageBucket: "letschatapp-a4a67.appspot.com",
    messagingSenderId: "282614350747",
    appId: "1:282614350747:web:8bfb42d5eda2127866173e",
    measurementId: "G-X9YDV7L1N1"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



