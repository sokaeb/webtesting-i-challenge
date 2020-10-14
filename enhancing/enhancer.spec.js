const { success, fail, repair, get } = require('./enhancer.js');
// test away!

let item = {
    name: "Crossbow",
    enhancement: 0,
    durability: 20
};

describe("enhancer.js", () => {
    describe("repair", () => {
        it("should return a new item with durability restored to 100", () => {
        
        let newItem = { name: "Crossbow", enhancement: 0, durability: 100 };
            expect(repair(item)).toEqual(newItem)
        });
    });

    describe("success", () => {
        it("should return an item with its enhancement increased by 1, up to 20", () => {
            let enhance = { name: "Crossbow", enhancement: 1, durability: 100 };

                expect(success(item)).toEqual(enhance)
        });
    });

    describe("fail", () => {
        let item2 = { name: "Crossbow", enhancement: 15, durability: 20 };
        let item3 = { name: "Crossbow", enhancement: 17, durability: 20};

        let failObj1 = { name: "Crossbow", enhancement: 1, durability: 95 };
        let failObj2 = { name: "Crossbow", enhancement: 15, durability: 10 };
        let failObj3 = { name: "Crossbow", enhancement: 16, durability: 10 };

        it("should decrease durability by 5 if enhancement < 15", () => {
                expect(fail(item)).toEqual(failObj1);
        });

        it("should decrease durability by 10 if enhancement <= 16", () => {
            expect(fail(item2)).toEqual(failObj2);
        });

        it("should decrease durability by 1 if enhancement > 16", () => {
            expect(fail(item3)).toEqual(failObj3);
        });
    });
 
});