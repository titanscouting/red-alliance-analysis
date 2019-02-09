/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

window.onload = function() {
  var promise1 = new Promise(function(resolve, reject) {
    document.getElementById('sideload').style.display = 'block';
    var config = {
      apiKey: "(insert the TitanScout Api Key Here)",
      authDomain: "titanscoutandroid.firebaseapp.com",
      databaseURL: "https://titanscoutandroid.firebaseio.com",
      projectId: "titanscoutandroid",
      storageBucket: "titanscoutandroid.appspot.com",
      messagingSenderId: "1097635313476"
    };
    firebase.initializeApp(config);
    user = firebase.auth().currentUser
    resolve(null)
  });
  promise1.then(function(a) {
    user=firebase.auth().currentUser
    if (user != null) {
      if (user.displayName != null) {
        document.getElementById('status').innerHTML = "You are signed in as: " + user.displayName;
      } else if (user.email != null) {
        document.getElementById('status').innerHTML = "You are signed in as: " + user.email;
      } else if (user.phoneNumber != null) {
        document.getElementById('status').innerHTML = "You are signed in as: " + user.phoneNumber;
      } else {
        document.getElementById('status').innerHTML = "You are signed in.";
      }
    } else {
      window.location.replace('../');
    }
  });
}
