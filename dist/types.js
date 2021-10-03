"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array
var items; // here I must have an array of numbers
items = [1, 2, 3];
var total2; // another way to declare the type of an array
total2 = [1, 2, 3];
// tuple = array that I know how many items it has and the type of this items
var title;
title = [1, "foo", "bar"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any --> don't use!!
var thing;
thing = [1];
thing = "a";
thing = 3;
// "noImplicitAny" in tsconfig
// void --> when it returns nothing
function logger() {
    console.log("foo");
}
// never
function error() {
    throw new Error("error");
}
// object --> everything that is not a primitive type
var cart;
cart = {
    key: "fi",
};
// Type inference
var message2 = "hello";
// let message2: string = 'hello'  // I could do that, but it is redundant, not necessary
// message2 = 2   // this is not possible
message2 = "new string";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
// union
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item);
}
// uid has a union type, that is can has one type or other (number or string)
logDetails(123, "shoe");
logDetails("a1#2x3", "shoe");
function hello(message, user) {
    console.log("Hi " + message + ", " + user);
}
function whatever(lookingFor, object) {
    console.log("The " + lookingFor + " and his " + object);
}
hello("hi", "Joe");
hello(true, "Joe");
whatever("dog", "ball");
whatever(false, "ball");
function renderPlataform(platform) { }
