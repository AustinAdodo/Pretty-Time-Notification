jest.mock('../__mocks__/readline.js');
const notification = require("./Index.js");
//jest my-test --notify --config=config.json npm install --save-dev jest
//add to package.json  "scripts": { "test": "jest"};  Run: npm run test || npm run test --Tests.test.js

const DaytimeKVP = new Map();
DaytimeKVP.set("Less than a second", "12-03-2023 5:24");
DaytimeKVP.set("A few minutes ago", "12-03-2023 5:24");
DaytimeKVP.set("A few hours ago", "12-03-2023 5:24");
DaytimeKVP.set("Within 24 hours ago", "12-03-2023 5:24");
DaytimeKVP.set("2 days gone", "12-03-2023 5:24");
DaytimeKVP.set("3 days gone", "12-03-2023 5:24");
DaytimeKVP.set("4 days gone", "12-03-2023 5:24");
DaytimeKVP.set("Days ago", "12-03-2023 5:24");

test("Processes certain dates", () => {
  expect(notification(DaytimeKVP.get['Less than a second'])).toBe("Less than a second");
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