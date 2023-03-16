//jest my-test --notify --config=config.json

//npm install --save-dev jest
//add to package.json.
// "scripts": {
//   "test": "jest"
// } 

//npm run test
//npm run test -- sum.test.js

const notification = require("../Pretty Time Notification/Index.js/dateTimeNotification");
test("Processes certain dates", () => {
  expect(notification("12-03-2023 5:24")).toBe("2 days ago");
  expect(notification("12-03-2023 5:24")).toBe("3 days ago");
});

test("Processes certain times", () => {
  expect(notification("12-03-2023 5:24")).toBe("2 days ago");
  expect(notification("12-03-2023 5:24")).toBe("3 days ago");
});

test("Rejects wrong inputs", () => {
  expect(notification("12-03-2023 5:24")).toBe("error");
  expect(notification("12-03-2023 5:24")).toBe("error");
});