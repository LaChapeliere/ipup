var machineContent = [{
        "beer_id": "1158103",
        "price": 18.90,
        "name": "BrewDog Trashy Blonde",
        "category": "lager",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "168803",
        "price": 22.90,
        "name": "East India Pale Ale",
        "category": "ale",
        "amount": 4,
        "alcoholic": true
    },
    {
        "beer_id": "181803",
        "price": 19.90,
        "name": "Äppelcider Halvtorr",
        "category": "cider",
        "amount": 8,
        "alcoholic": true
    },
    {
        "beer_id": "1125001",
        "price": 21.90,
        "name": "Paulaner Oktoberfest",
        "category": "beer",
        "amount": 1,
        "alcoholic": true
    },
    {
        "beer_id": "197702",
        "price": 11.90,
        "name": "Apple Green Tea",
        "category": "soft",
        "amount": 10,
        "alcoholic": false
    },
    {
        "beer_id": "167101",
        "price": 29.40,
        "name": "St Peter's Cream Stout",
        "category": "stout",
        "amount": 3,
        "alcoholic": true
    },
    {
        "beer_id": "223301",
        "price": 99,
        "name": "Château Pech-Latt",
        "category": "red_wine",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "669702",
        "price": 45,
        "name": "Chilcas Sauvignon Blanc",
        "category": "white_wine",
        "amount": 5,
        "alcoholic": true
    },
    {
        "beer_id": "1",
        "price": 23,
        "name": "Test1",
        "category": "beer",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "2",
        "price": 23,
        "name": "Test2",
        "category": "cider",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "3",
        "price": 23,
        "name": "Test3",
        "category": "lager",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "214401",
        "price": 23,
        "name": "Poliziano Vino Nobile di Montepulciano",
        "category": "red_wine",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "4",
        "price": 23,
        "name": "Test4",
        "category": "soft",
        "amount": 10,
        "alcoholic": false
    },
    {
        "beer_id": "5",
        "price": 23,
        "name": "Test5",
        "category": "soft",
        "amount": 10,
        "alcoholic": false
    },
    {
        "beer_id": "6",
        "price": 23,
        "name": "Test6",
        "category": "beer",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "207504",
        "price": 23,
        "name": "Test",
        "category": "white_wine",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "7",
        "price": "23",
        "name": "Test7",
        "category": "ale",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "8",
        "price": 23,
        "name": "Test8",
        "category": "stout",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "9",
        "price": 23,
        "name": "Test9",
        "category": "beer",
        "amount": "0",
        "alcoholic": true
    },
    {
        "beer_id": "10",
        "price": 23,
        "name": "Test10",
        "category": "ale",
        "amount": 10,
        "alcoholic": true
    }
];

/**
 * Modifies the quantity of a beverage in the machine
 * @NOTE This modification only lasts for the current connection
 * @param beerId The id of the beverage. If several slots are occupied by this beverage, picks the first one in the list
 * @param modifyer How many beverages to add/remove
 */
function updateMachineContentQuantities(beerId, modifyer) {
    var i = 0; //Loop index

    for (; i < machineContent.length; i++) {
        if (machineContent[i].beer_id === beerId) {
            console.log(machineContent[i].beer_id);
            console.log(beerId);
            machineContent[i].amount -= modifyer;
            beveragesSlots[i].updateSlotQuantity(machineContent[i].amount);
            return;
        }
    }

    console.log("Error in updateMachineContentQuantities: no such drink");
}