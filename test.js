import { assert } from "chai";
import { my_sum } from "./day-1/exercise-0.js";
import { my_display_alpha } from "./day-1/exercise-1.js";
import { my_display_alpha_reverse } from "./day-1/exercise-2.js";
import { my_alpha_number } from "./day-1/exercise-3.js";
import { my_size_alpha } from "./day-1/exercise-4.js";
import { my_array_alpha } from "./day-1/exercise-5.js";
import { my_length_array } from "./day-1/exercise-6.js";
import { my_is_posi_neg } from "./day-1/exercise-7.js";

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

  //exercise 2
  describe("exercise-2", function () {
    it("Should know to get alpha reverse", function () {
      const res = my_display_alpha_reverse();
      assert.equal(res, "zyxwvutsrqponmlkjihgfedcba");
    });
  });

  //exercise 3
  describe("exercise-3", function () {
    it("Convert a number value to a string", function () {
      const test = 10;
      const res = my_alpha_number(test);
      assert.equal(res, "10");
    });
  });

  //exercise 4
  describe("exercise-4", function () {
    it("Count the number of letters passed as arguments", function () {
      const test = "mathieu";
      const res = my_size_alpha(test);
      assert.equal(res, 7);
    });
  });

  //exercise 5
  describe("exercise-5", function () {
    it.only("Returns an array of all characters passed as argument", function () {
      const test = "bonjour";
      const res = my_array_alpha(test);
      assert.deepEqual(res, ["b", "o", "n", "j", "o", "u", "r"]);
    });
  });

  //exercise 6
  describe("exercise-6", function () {
    it("Counts the number of elements contained in an array passed in parameter", function () {
      const test = ["aia", "aia", "aia"];
      const res = my_length_array(test);
      assert.equal(res, 3);
    });
  });

  //exercise 7
  describe("exercise-7", function () {
    it("A function that displays POSITIVE or NEGATIVE depending on the integer passed as argument.  If nbr is negative then display NEGATIVE", function () {
      const test = 10;
      const res = my_is_posi_neg(test);
      assert.equal(res, "POSITIF");
    });
  });
});
