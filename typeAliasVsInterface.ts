// #### TYPE ALIAS ####
// Definition
type GameT = {
    title: string;
};

type DLCT = {
    extra: string;
};

// Intersection
type GameCollectionT = Game & DLCT;

// implements
class CreateGameT implements GameCollectionT {}

// Function declaration
type getSimilarsT = (title: string) => void;

//-------- Differences ---------
// allow primitive type declaration

// allow Tuple declaration

// Only one declaration per scop
type JQueryT = { a: string };
//type JQueryT = { a: string }; // not possible

// Mais recomendado:
// na maioria das vezes

// #### INTERFACES❗ ####
// Definition
interface Game {
    title: string;
}

interface DLC {
    extra: string;
}

// Intersection / extend
interface GameCollection extends Game, DLC {}

// implements
class CreateGame implements GameCollection {}

// Function declaration
interface getSimilars {
    (title: string): void;
}

//-------- Differences ---------
// don't allow primitive type declaration

// don't allow Tuple declaration

// Multiple declarations (merge all)
interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const $: JQuery = {
    a: "bla",
    b: "foo",
};

// vantagem: quando estiver criando libs, prefira Interfaces, porque sao mais extensíveis.

// criando objetos/classes(POO)
