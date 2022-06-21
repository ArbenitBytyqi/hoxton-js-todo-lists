// @ts-nocheck

for (let user of users) {
    let name = user.name
    let id = user.id
    let city = user.address.city
    console.log(`${name} is from ${city} and their ID is ${id}
    
`)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let userId = Number(prompt('Enter user ID:'))

let theUser = null

for (let user of users) {
    if (user.id === userId) {
        theUser = user
        break
    }
}

let theTodos = []

for (let todo of todos) {
    if (todo.userId === userId) {
        theTodos.push(todo)
    }
}

console.log(`The todos for the user with the ID ${userId} are: ${theTodos} `)

let message = ''

message = message + `Hello ${theUser.username}`

for (let todo of theTodos) {
    message = message + `${todo.title}`
}

alert('message')
