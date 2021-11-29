import { assert } from "chai";
import { my_sum } from "./day-1/exercise-0.js";

describe("Test day-1", function () {
  //Exercise 0
  describe("exercise-0", function () {
    it("Should know how to add up", function () {
      let cal1 = 1;
      let cal2 = 2;
      const res = my_sum(1, 2);

      assert.equal(res, 0 || cal1 + cal2);
    });
  });

  //exercise 1
  describe("exercise-1", function () {
    it("Should know to get alpha", function () {
      const res = my_display_alpha();
      assert.equal(res, "abcdefghijklmnopqrstuvwxyz");
    });
  });
});
