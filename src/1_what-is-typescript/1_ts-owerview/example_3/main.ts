interface User {
    id: number
    firstName: string
    lastName: string
    role: string
}

function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id)
    const newUser = {...user, ...update}
    saveUser(id, newUser)
}

function getUser(id) {
    return {id: id, firstName: "John", lastName: "Doe", role: "admin"}
}

function saveUser(id, newUser)
{
    //
}
