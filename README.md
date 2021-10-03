# Basic concepts of Typescript

Based on a Willian Justin's [course](https://willianjusten.com.br/mini-curso-gratuito-de-typescript)

## Commands

npm install typescript --save-dev
Or
yarn add -D typescript

### Compile and watch

tsc fileName.ts

### Create a tsconfig.json file

tsc --init

### To execute

nodemon fileName.js

### With react

yarn create react-app . --template typescript

### Backend

sudo apt install node-typescript

yarn add @types/express

## tsconfig.json

Uncomment "outDir" and choose in which folder the js file compiled will be created, for example **"outDir": "./dist"**

## Libraries

ts-node-dev
sucrase

---

## Object Types

### Anonymous

function greet(person:{name: string; age: number}) {
return "Hello" + person.name
}

### Interface

interface Person{
name: string;
age: number;
}

function greet(person: Person) {
return "Hello" + person.name
}

### Type Alias

type Person = {
name: string;
age: number;
}

function greet(person: Person) {
return "Hello" + person.name
}
