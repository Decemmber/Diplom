firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user', user);
    } else {
      console.log('no user', user);
    }
  });