class Person {
    constructor(name, bags) {
        this.bags = [];
        this.name = name;
    }
    // Include a Constructor Method for Properties: 
        // 1. Name
        // 2. Bags
            // 2a. Bags should contain/reference a data type for storing more than one bag object.

    // Include an addBag method
    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = Person;
//Export the Module