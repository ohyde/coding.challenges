import { expect } from 'chai';
import { approachOne } from '../../src/euler/problemTwo';


describe('euler problemTwo', () => {
  describe("approachOne", () => {
    it("should return 4613732", () => {
      const result = approachOne();
      expect(result).to.equal(4613732);
    });
  });
})
