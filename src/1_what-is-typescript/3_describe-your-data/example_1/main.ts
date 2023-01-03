interface Account {
    id: number
    displayName: string
    version: 1
}

function welcome(user: Account) {
    console.log(user.id)
}

type Result = "pass" | "fail"

function verify(result: Result) {
    if (result === "pass") {
        console.log("Passed")
    } else {
        console.log("Failed")
    }
}
