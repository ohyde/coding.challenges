import { expect } from 'chai';
import { approachOne, approachTwo, approachThree } from '../../src/euler/problemOne';


describe('euler problemOne', () => {
  describe("approachOne", () => {
    it("should return 233168 when the array of 1000 numbers are passed to it", () => {
      const result = approachOne(1000);
      expect(result).to.equal(233168);
    });
  });

  describe("approachTwo", () => {
    it("should return 233168 when the array of 1000 numbers are passed to it", () => {
      const result = approachTwo(1000);
      expect(result).to.equal(233168);
    });
  });

  describe("approachThree", () => {
    it("should return 233168 when the array of 1000 numbers are passed to it", () => {
      const result = approachThree(1000);
      expect(result).to.equal(233168);
    });
  });
})
