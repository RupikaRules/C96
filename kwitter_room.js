const firebaseConfig = {
  apiKey: "AIzaSyAGFCDcCxhUah5onjiLMMJq_2f-1WQ3VzI",
  authDomain: "classtest-662f3.firebaseapp.com",
  databaseURL: "https://classtest-662f3-default-rtdb.firebaseio.com",
  projectId: "classtest-662f3",
  storageBucket: "classtest-662f3.appspot.com",
  messagingSenderId: "648763502259",
  appId: "1:648763502259:web:cf66f39b86db28bdc4cac6"
};

  
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
