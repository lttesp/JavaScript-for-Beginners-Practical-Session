var userMonth  = document.getElementById("user-month");
var userDay  = document.getElementById("user-date");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date")

submitButton.addEventListener(click, function(event){
    var message = document.getElementById("display");
    var parsedMonth = (parseInt(userMonth)-1);
    var parsedDay = parseInt(userDay.value);
    var parsedYear = parseInt(useryear.value);
    var months = ["January",
        "February",
        "March",
        "April"	,
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    var weekdays = ["Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"];
    var dateIs = new Date(parsedYear,parsedDay,parsedMonth);
    var days =

})


