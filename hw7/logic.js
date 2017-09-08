// Create a variable to reference the database

    var database  = firebase.database();


    database.ref().on("child_added", function(snapshot){


        var dateSer = moment(snapshot.val().date);
        var now = moment();
        var convertToDate  = moment(dateSer);
        var diff = now.diff(convertToDate, 'months');
        var totalBilled = diff * snapshot.val().rate;

      
        $('#currnet-employee').append('<tr><td>' + snapshot.val().name + "</td><td>" 
            + snapshot.val().role +'</td><td>' 
            + snapshot.val().rate + "</td><td>"+ snapshot.val().rate + "</td><td>"
            + totalBilled       + '</td></tr');


    }, function(){

        console.log("The read failed: " + errorObject.code);
    });


    $("#add-employee").on("click", function(event) {
        
        // Prevent form from submitting
        event.preventDefault();

        var name = $("#name-input").val().trim();
        var role = $("#role-input").val().trim();
        var date = $("#time-input").val().trim();
        var rate = $("#rate-input").val().trim();

        database.ref().push({
            name: name,
            role: role,
            date: date,
            rate: rate,
        });
    });