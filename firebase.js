var registration_li = document.getElementById('registration_li');
var signin_li = document.getElementById('signin_li');
var lk_li = document.getElementById('lk_li');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user', user);
    } else {
      console.log('no user', user);
    }
  });