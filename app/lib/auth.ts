export const users = [{
    id: "1",
    name: "Admin",
    email: "admin@test.com",
    password: "asdf1234", // dev only
    role: "admin",
}]

export function authenticate( data : { email: string, password : string }) {

    const foundUser = users.find((user) => user.email === data.email && data.password === user.password)
 
    if (!foundUser) {
        return null
    }

    return foundUser
}