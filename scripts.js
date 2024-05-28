document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            return firebase.firestore().collection('users').doc(user.uid).set({
                fullName: fullName,
                email: email
            });
        })
        .then(() => {
            alert('Sign-up successful');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Log-in successful');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
});
