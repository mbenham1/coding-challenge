//Write a function that counts duplicate members of an array, and returns the member with the highest count (if the count is odd)

// ["1", "1", "2", "2", "2", "3", "3", "4", "4", "5"]

//Per Scott's suggestion, we can use an object
const count = {};

//Original array
const testArray = ["1", "1", "2", "2", "2", "3", "3", "4", "4", "5"];

function codingTest(original) {

    console.log("----------------------------------------------");

    console.log(`Starting array: ${original}`);

    console.log("----------------------------------------------");

    //Find the count for each member of the array
    original.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });

    for (property in count) {
        console.log(`${property}s: ${count[property]}`)
    }

    console.log("----------------------------------------------");

    //Now that we have each number's count in an object, we need to find the key with the highest value

    //Keys Array
    const keys = Object.keys(count);
    // console.log(keys);

    //Values Array
    const values = Object.values(count);
    // console.log(values);

    //Sort values array lowest to highest
    const lowestToHighest = values.sort((a, b) => a - b);
    // console.log(lowestToHighest);

    //Pluck last member of array
    const index = lowestToHighest.length - 1;
    // console.log(index)

    //Find key with highest value
    const key = keys.find(key => count[key] === lowestToHighest[index]);

    //Check to see if the highest value is odd or even
    if (lowestToHighest[index] % 2 === 0) {
        console.log("Most duplicate member is Even");
    } else {
        console.log(`Most (odd) duplicates: ${key} Quantity: ${lowestToHighest[index]}`);
    }

    console.log("----------------------------------------------");

}

codingTest(testArray);

//To add:
//If multiple numbers have the same amount of odd counts, print both
//If the most duplicated number is even, print highest odd instead