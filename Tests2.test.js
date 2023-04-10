jest.mock('../__mocks__/readline.js');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const notification = require("./Index.js");
//npm install --save-dev mocha   npx mocha Tests2.test.js

const DaytimeKVP = new Map();
DaytimeKVP.set("A few Seconds ago", "12-03-2023 5:24");
DaytimeKVP.set("A few minutes ago", "12-03-2023 5:24");
DaytimeKVP.set("A few hours ago", "12-03-2023 5:24");
DaytimeKVP.set("Within 24 hours ago", "12-03-2023 5:24");
DaytimeKVP.set("2 days gone", "12-03-2023 5:24");
DaytimeKVP.set("3 days gone", "12-03-2023 5:24");
DaytimeKVP.set("4 days gone", "12-03-2023 5:24");
DaytimeKVP.set("Days ago", "12-03-2023 5:24");

describe("Basic Tests", () => {
  describe("Test1", function () {
    it("Just a few seconds ago.", () => {
      const expected = "2 days ago";
      const message = "The return value should read " + expected;
      assert.deepEqual(
        notification(DaytimeKVP.get("A few Seconds ago")),
        expected,
        message
      );
    });
  });

  describe("Test2", function () {
    it("should work on an array where the best equals the target", () => {
      const expected = "A few minutes ago";
      const message = "The return value should read " + expected;
      assert.deepEqual(
        notification(DaytimeKVP.get("A few Seconds ago")),
        expected,
        message
      );
    });
  });

  describe("Test3", function () {
    it("should work on an array where all pair sums exceed the target", () => {
      const expected = "A few minutes ago";
      const message = "The return value should read " + expected;
      assert.deepEqual(
        notification(DaytimeKVP.get("A few Seconds ago")),
        expected,
        message
      );
    });
  });

  describe("Test4", function () {
    it("should work on an array where all pair sums exceed the target", () => {
      const expected = "A few minutes ago";
      const message = "The return value should read " + expected;
      assert.deepEqual(
        notification(DaytimeKVP.get("A few Seconds ago")),
        expected,
        message
      );
    });
  });

  describe("Test5", function () {
    it("should work on an array where all pair sums exceed the target", () => {
      const expected = "A few minutes ago";
      const message = "The return value should read " + expected;
      assert.deepEqual(
        notification(DaytimeKVP.get("A few Seconds ago")),
        expected,
        message
      );
    });
  });
});
