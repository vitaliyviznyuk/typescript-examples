interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

const badUser: User = {
    username: "Hayes",
    id: 0,
};

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const userAccount: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
    //...
}

function deleteUser(user: User) {
    // ...
}
