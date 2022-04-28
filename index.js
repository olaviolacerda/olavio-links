// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzlirMlhyW6xnpMVW6WMseHqQIUdjDlTc",
    authDomain: "olavio-lacerda.firebaseapp.com",
    projectId: "olavio-lacerda",
    storageBucket: "olavio-lacerda.appspot.com",
    messagingSenderId: "1038987929291",
    appId: "1:1038987929291:web:f7c8aad36648b769925d4e",
    measurementId: "G-WEXDHMZ3MC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});