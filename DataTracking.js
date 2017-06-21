    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBb5K6zcQINJoM7V3AFQodAqbMdrGKgRDQ",
        authDomain: "mywebsite-5762c.firebaseapp.com",
        databaseURL: "https://mywebsite-5762c.firebaseio.com",
        projectId: "mywebsite-5762c",
        storageBucket: "mywebsite-5762c.appspot.com",
        messagingSenderId: "917882964767"
    };
firebase.initializeApp(config);

var database = firebase.database();

function write() {
    var counter = 0;
    database.ref('SiteTraffic/Visits')
        .once('value').then(function(snapshot) {
            counter = snapshot.val() + 1;
            database.ref("SiteTraffic").set({
                Visits: counter
            });
        });
    //alert(counter);

            

}

