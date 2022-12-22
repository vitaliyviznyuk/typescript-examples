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
