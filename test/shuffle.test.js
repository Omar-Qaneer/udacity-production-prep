import {expect} from 'chai';
import {shuffle} from '../src/shuffle.js';

describe("Verifies shuffle fuctionality",() => {
    it("Should shuffles the indexes of an array",() => {
        const original = [1, 2, 3, 4, 5];
        const result = shuffle(original);

        // check if same elements exisit
        expect(result).to.have.members(original);
        expect(result).to.have.lengthOf(original.length);

        //check if the order is not exactly the same
        const sameOrder = original.every((val,index) => val === result[index]);
        expect(sameOrder).to.be.false;
    });

    it("Should return empty array when input is empty", () => {
        const empty = [];
        const result = shuffle(empty);
        expect(result).to.be.an("array").that.is.empty;
    })
});