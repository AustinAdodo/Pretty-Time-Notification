//jest my-test --notify --config=config.json

//npm install --save-dev jest
//add to package.json.
// "scripts": {
//   "test": "jest"
// } 

//npm run test
//npm run test -- sum.test.js
const DaytimeKVP = new Map();
DaytimeKVP.set("2 days gone","12-03-2023 5:24");
DaytimeKVP.set("3 days gone","12-03-2023 5:24");
DaytimeKVP.set("4 days gone","12-03-2023 5:24");
// for (const[key,value] of DaytimeKVP ) {
//   console.log(key,value);
//DaytimeKVP.has("4 days gone");
// }

const notification = require("../Pretty Time Notification/Index.js/dateTimeNotification");
test("Processes certain dates", () => {
  expect(notification(DaytimeKVP.get['2 days gone'])).toBe("2 days ago");
  expect(notification(DaytimeKVP.get['3 days gone'])).toBe("3 days ago");
  expect(notification(DaytimeKVP.get['4 days gone'])).toBe("3 days ago");
});

test("Processes certain times", () => {
  expect(notification("12-03-2023 5:24")).toBe("2 days ago");
  expect(notification("12-03-2023 5:24")).toBe("3 days ago");
});

test("Rejects wrong inputs", () => {
  expect(notification("12-03-2023 5:24")).toBe("error");
  expect(notification("12-03-2023 5:24")).toBe("error");
});