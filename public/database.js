var registration_li = document.getElementById('registration_li');
var signin_li = document.getElementById('signin_li');
var lk_li = document.getElementById('lk_li');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        registration_li.style = "display: none";
        signin_li.style = "display: none";
        lk_li.style = "display: initial";
        console.log('user', user);
    } else {
        registration_li.style = "display: initial";
        signin_li.style = "display: initial";
        lk_li.style = "display: none";
        console.log('no user', user);
    }
    window.location.replace("lk.html");
});