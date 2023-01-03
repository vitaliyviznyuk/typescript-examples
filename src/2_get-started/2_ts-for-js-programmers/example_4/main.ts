// @errors: 2322
interface User {
    name: string;
    id: number;
}

const user: User = {
    username: "Hayes",  // Type '{ username: string; id: number; }' is not assignable to type 'User'.
                        // Object literal may only specify known properties, and 'username' does not exist in
                        // type 'User'.
    id: 0,
};
