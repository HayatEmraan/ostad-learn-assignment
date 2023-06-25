function myDateFunc(dateNew) {
  var daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let d = new Date(dateNew);
  let day = d.getDate();
  let month = monthNames[d.getMonth()];
  let year = d.getFullYear();
  let dayName = daysNames[d.getDay()];
  console.log(dayName + " " + day + " " + month + " " + year);  // output: Sat 25 Nov 2023
}

myDateFunc("2023-11-25");
