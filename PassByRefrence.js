function callByRef(personData){
    console.log(`NAme = ${personData.name}, age = ${personData.age}`);
}
let person = {
    name: "virendra",
    age: 25
}
callByRef(person)