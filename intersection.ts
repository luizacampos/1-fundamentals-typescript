// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string; // ? means optional
};

const account: AccountInfo = {
    id: 1,
    name: "Paul",
    email: "paul@mail.com",
};

type CharInfo = {
    nickname: string;
    level: number;
};

const char: CharInfo = {
    nickname: "paulPlayer",
    level: 5,
};

// INTERSECTION
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 2,
    name: "PerfWidgetExternal",
    nickname: "peterPlayer",
    level: 7,
};
