console.log("Connected to BOP_test_folder/BOP_test.js");

var $calendar = document.getElementById("calendar");
var currentYear = new Date().getFullYear();
var calendarize = new Calendarize();
calendarize.buildYearCalendar($calendar, currentYear);
