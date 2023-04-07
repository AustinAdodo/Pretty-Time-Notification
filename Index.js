//const { time } = require("console");

// const readline = require("readline").createInterface({

  console.log(new Date().toLocaleTimeString);
//   input: process.stdin,
//   output: process.stdout,
// });

function dateTimeNotification(datetime = "19-02-23 2:03") {
  let date1 = datetime.split(" ")[0];
  const now = new Date();
  let time1 = datetime.split(" ")[1];
  //let date = readline() || date1;
  let min = time1.split(":")[1];
  let hr = time1.split(":")[0];
  let DateArray = date1.includes(".")
    ? date1.split(".")
    : date1.includes("-")
    ? date1.split("-")
    : date1.includes("/")
    ? date1.split("/")
    : date1.split("''")
    ? date1.split("''")
    : date1.split(" ");
  //let ComparedDateFormat = new Date();
  let a = "";
  let result = "";
  let hold2 = 0;
  let digits = readline();
  let dateDifference = now.getDate() - parseInt(DateArray[0]);
  let timeDifference = parseInt(now.toLocaleTimeString()) - parseInt();

  switch (dateDifference) {
    case digits == 0:
      function seconds(param = 0) {
        a = param == 1 ? param + " sec." : param + " secs.";
        return a;
      }
      result = seconds(digits);
      break;

    case 60 <= digits && digits < 3600:
      function minutes(param = 0) {
        hold = Math.floor(param / 60);
        a =
          param == 60
            ? 1 + " minute"
            : param > 60 && param % 60 == 0
            ? hold + " minutes"
            : param > 60 && param % 60 != 0
            ? hold + " minutes " + seconds(param % 60)
            : "cannot resolve";
        return a;
      }
      result = minutes(digits);
      break;

    case 3600 <= digits && digits < 3600 * 24:
      function hour(param = 0) {
        hold = Math.floor(param / 3600);
        hold2 = param - hold * 3600;
        a =
          param == 3600
            ? 1 + " hour"
            : param > 3600 && param % 3600 == 0
            ? hold + " hours"
            : param > 3600 && param % 3600 != 0
            ? hold +
              " hours " +
              (hold2 >= 60 && hold2 < 3600 ? minutes(hold2) : seconds(hold2))
            : "cannot resolve";
        return a;
      }
      result = hour(digits);
      break;

    case 3600 * 24 <= digits && digits <= 3600 * 24 * 7:
      function day(param = 0) {
        hold = Math.floor(param / (3600 * 24));
        hold2 = param - hold * 3600 * 24;
        console.log(hold);
        console.log(hold2);
        a =
          param == 3600 * 24
            ? 1 + " day"
            : param > 3600 * 24 && param % (3600 * 24) == 0
            ? hold + " days"
            : param > 3600 * 24 && param % (3600 * 24) != 0
            ? hold +
              " days " +
              (hold2 >= 3600 && hold2 < 3600 * 24
                ? hour(hold2)
                : hold2 >= 60 && hold2 < 3600
                ? minutes(hold2)
                : seconds(hold2))
            : "cannot resolve";
        return a;
      }
      result = day(digits);
      break;
  }
  return result;
}

module.exports = dateTimeNotification;
