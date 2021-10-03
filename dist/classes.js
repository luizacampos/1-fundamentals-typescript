"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old");
    };
    return UserAccount;
}());
var will = new UserAccount("Willian", 30);
console.log(will);
console.log(will.name);
will.logDetails();
// CLASS EXTENDS
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        // GET
        get: function () {
            console.log("----GET----");
            return this.level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setNickname", {
        // SET
        set: function (nickname) {
            this.nickname = nickname;
        },
        enumerable: true,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + " has the char " + this.nickname + " at level " + this.level);
    };
    return CharAccount;
}(UserAccount));
var john = new CharAccount("John", 45, "johnPlayer", 10);
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
var GroceryList = /** @class */ (function () {
    function GroceryList(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return GroceryList;
}());
// This is not possible (Cannot create an instance of an abstract class.)
//const myList = new GroceryList("apple", 20);
