function greet(person) {
    return person.firstName + "" + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'Mike' };
console.log(greet(user));
