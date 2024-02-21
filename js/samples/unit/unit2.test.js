import { getAge } from "./unit2";

describe("getAge Unite Test Suites", () => {
    it('should return "Vous avez 20 ans"', () => {
        expect(getAge(20)).toBe("Vous avez 20 ans");
    });
});