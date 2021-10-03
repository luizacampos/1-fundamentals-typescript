class UserAccount {
    name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}

const will = new UserAccount("Willian", 30);
console.log(will);
console.log(will.name);
will.logDetails();

// CLASS EXTENDS
class CharAccount extends UserAccount {
    nickname: string;
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    // GET
    get getLevel() {
        console.log("----GET----");
        return this.level;
    }

    // SET
    set setNickname(nickname: string) {
        this.nickname = nickname;
    }

    logCharDetails(): void {
        console.log(
            `The player ${this.name} has the char ${this.nickname} at level ${this.level}`
        );
    }
}

const john = new CharAccount("John", 45, "johnPlayer", 10);
console.log(john);
john.logDetails();

// modifying
john.nickname = "iceCream";
// john.level = 50000;    // not possible, because it is a readonly property
// john.age = 12;     // not possible, because it is a private property
console.log(john);
john.logCharDetails();

// GET and SET
console.log(john.getLevel);
john.setNickname = "Dog";
console.log(john.nickname);

// ABSTRACT CLASS
abstract class GroceryList {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

// This is not possible (Cannot create an instance of an abstract class.)
//const myList = new GroceryList("apple", 20);
