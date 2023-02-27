function dateTimeNotification(date = "dd-mm-yy") {
  let DateArray = date.includes(".")
    ? date.split(".")
    : date.includes("-")
    ? date.split("-")
    : date.includes("/")
    ? date.split("/")
    : date.split(" ");
  //let ComparedDateFormat = new Date();
  let a = "";
  let result = "";
  let hold = 0;
  let digits = 0;
  let hold2 = 0;
  digits = document.getElementById("totaltimetowords").value;

  switch (digits <= 3600 * 24 * 7 + 1) {
    case digits < 60:
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
  document.getElementById("totaltimetowordsResult").value = result;
}
