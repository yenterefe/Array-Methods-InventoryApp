//Food inventory
let foodInventory = [];

function logFruit(name, weight, expiration) {
    const food = {
        name,
        weight,
        expiration
    }

    foodInventory.push(food);
}

// fruit logged after being dropped at the facility
const fruit1 = logFruit("apple", 0.5, 2);
const fruit2 = logFruit("banana", 0.25, 1);
const fruit3 = logFruit("mango", 2, 2.5);


function totalFruitDelivered() {
    // provides how much food we have in the inventory
    console.log(`${foodInventory.length} amount of food has been delivered`);
}

function nameOfFoodDelivered() {
    // provides the name of the fruits delivered
    foodInventory.forEach(element => console.log(element.name));
}

function totalWeightOfFoodDelivered() {
    const weight = foodInventory.reduce((total, currentValue) => total + currentValue.weight, 0);
    console.log(`total weight is ${weight} lbs`);
}

function quickestFruitToRot() {
    foodInventory.filter(element => {
        if (element.expiration <= 1) {
            console.log(`The first food to expire is ${element.name} and expires in ${element.expiration} week`);
        }
    });
}

function capitalizeFruitName() {
    foodInventory.map(element => console.log(element.name.toUpperCase()));
}


totalFruitDelivered();
nameOfFoodDelivered();
totalWeightOfFoodDelivered();
quickestFruitToRot();
capitalizeFruitName();