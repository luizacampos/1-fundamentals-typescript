interface Game {
    id?: string | number;
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[]; // ? optional
    getSimilars?: (title: string) => void;
}

const game1: Game = {
    title: "The last of us",
    description: "Best game",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, Merto`);
    },
};

// TYPE GUARD
if (game1.getSimilars) {
    game1.getSimilars(game1.title);
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const game2: DLC = {
    title: "The Last os us - Left Behind",
    description: "You play as Ellie",
    genre: "Action",
    originalGame: game1,
    newContent: ["3 hours story", "new characters"],
};

// Implement a interface at a class
class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
