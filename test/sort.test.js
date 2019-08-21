const { sortStuff } = require("../app");
const expect = require("chai").expect;

const dummyData = [
    {
        "App": "ROBLOX",
        "Rating": 4.5
    },
    {
        "App": "Subway Surfers",
        "Rating": 4.7,
    },
    {
        "App": "Candy Crush Saga",
        "Rating": 4.4,
    },
];


describe("sort the list by either rating or app ", () => {
    it('Should sort Alphabetically', () => {
        const test = sortStuff('app', dummyData);
        expect(test).to.deep.equal([{
            "App": "Candy Crush Saga",
            "Rating": 4.4,
        },
        {
            "App": "ROBLOX",
            "Rating": 4.5
        },
        {
            "App": "Subway Surfers",
            "Rating": 4.7,
        }
        ]);
    });

    it('Should sort numerically', () => {
        const test = sortStuff('rating', dummyData);
        expect(test).to.deep.equal([
            {
                "App": "Subway Surfers",
                "Rating": 4.7,
            },
            {
                "App": "ROBLOX",
                "Rating": 4.5
            },
            {
            "App": "Candy Crush Saga",
            "Rating": 4.4,
            }
        
        
        ]);
    });
});