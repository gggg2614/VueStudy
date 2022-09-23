interface Person {
    firstName: string
    lastName: string
}

function greet(person: Person) {
    return person.firstName + "" + person.lastName
}

let user = { firstName: 'Jane', lastName: 'Mike' }

console.log(greet(user))