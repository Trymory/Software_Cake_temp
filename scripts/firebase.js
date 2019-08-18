// Your web app's Firebase configuration

var firebaseConfig = {
apiKey: "AIzaSyA4pe7hzuvEz1JLsloFjsJiuYgPEH_pWiQ",
    authDomain: "cake-me.firebaseapp.com",
    databaseURL: "https://cake-me.firebaseio.com",
    projectId: "cake-me",
    storageBucket: "cake-me.appspot.com",
    messagingSenderId: "254971856157",
    appId: "1:254971856157:web:1f941079100174d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var appointmentsDb = db.doc('appointments/SAAW6sPmt0OrrkUvUhYJ');
var cardsDb = db.collection("cards").doc('9lAMP1YUpIbCwUU2p4MH');

$(function() {
    $("#card-btn").click(function() {
        var reason = document.getElementById('reason');
        var c_name = document.getElementById('c_name');
        var u_name = document.getElementById('u_name');
        var phone = document.getElementById('phone');
        var email = document.getElementById('email');
        var submit = true;
        
        if(u_name.value == '' || u_name.value == null){
            submit = false;
            $("#u_name").attr('value', 'Please enter you name');
            $("#u_name").css('color', 'red');
        } 
        
        if (email.value == '' || email.value == null) {
            submit = false;
            $("#email").attr('value', 'Please a valid email');
            $("#email").css('color', 'red');
        }
        if(submit == true){
            // Add a new document in collection "cities"
            db.collection("cards").add({
                comment: reason.value,
                company_name: c_name.value,
                name: u_name.value,
                number: phone.value,
                email: email.value,
            })
            .then(function() {
                $("#u_name").css('display', 'none');
                $("#c_name").css('display', 'none');
                $("#phone").css('display', 'none');
                $("#email").css('display', 'none');
                $("#card-btn").css('display', 'none');
                $("#reason").css('color', '#00ff7f');
                $("#reason").attr("disabled", true);
                $("#reason").val("Sent!");
                $("#reason").addClass("text-center");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        }
    });
});