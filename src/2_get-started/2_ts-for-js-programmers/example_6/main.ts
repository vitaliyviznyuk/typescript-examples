// @noErrors
interface User {
    name: string;
    id: number;
}
// ---cut---
function getAdminUser(): User {
    //...
}

function deleteUser(user: User) {
    // ...
}
