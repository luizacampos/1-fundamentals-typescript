// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array
let items: number[]; // here I must have an array of numbers
items = [1, 2, 3];

let total2: Array<number>; // another way to declare the type of an array
total2 = [1, 2, 3];

// tuple = array that I know how many items it has and the type of this items
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = "#fff",
    black = "#000",
}

// any --> don't use!!
let thing: any;
thing = [1];
thing = "a";
thing = 3;

// "noImplicitAny" in tsconfig

// void --> when it returns nothing
function logger(): void {
    console.log("foo");
}

// null / undefined --> most used with type alias
type Bla = string | undefined;

// never
function error(): never {
    throw new Error("error");
}

// object --> everything that is not a primitive type
let cart: object;
cart = {
    key: "fi",
};

// Type inference
let message2 = "hello";
// let message2: string = 'hello'  // I could do that, but it is redundant, not necessary
// message2 = 2   // this is not possible
message2 = "new string";

window.addEventListener("click", (e) => {
    console.log(e.target);
});

// union
function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
// uid has a union type, that is can has one type or other (number or string)
logDetails(123, "shoe");
logDetails("a1#2x3", "shoe");

// alias
type info = string | boolean;
function hello(message: info, user: string) {
    console.log(`Hi ${message}, ${user}`);
}

function whatever(lookingFor: info, object: string) {
    console.log(`The ${lookingFor} and his ${object}`);
}

hello("hi", "Joe");
hello(true, "Joe");

whatever("dog", "ball");
whatever(false, "ball");

type Platform = "Windows" | "Linux" | "Mac Os";
function renderPlataform(platform: Platform) {}
