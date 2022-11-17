const animals = ["dog", "cat", "bird", "fish", "lizard"];
// Normal
for (i = 2; i < animals.length; i++) {
    console.log(`${animals[i]}`);

}
//  for iterable
for (let animal of animals) {
    console.log(`${animal}`);
}

//for (variable of iterable){
    // code block to be executed
// }

const cars = ["BMW", "Volvo", "Mini"];
for(let car of cars){
    console.log(`${car}`);
    cars[0];
}
// car;
cars.forEach(car => console.log(`${car}`));


// forEach
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

//Arrow Function
let arrowFunction = (element) => {console.log(element)}
//파라매타  => {스코프}

array1.forEach(arrowFunction);

// Nomal Function
function normalFunction(element){
    console.log(element);
}

//NomalFunction
// function elementNormal()


//objects.js 

// const animals_obj = [
//     animal,
//     { name: "dog", species: "canine" },
//     { name: "cat", species: "feline" },
//     { name: "bird", species: "avian" },
//     { name: "fish", species: "aquatic" },
//     { name: "lizard", species: "reptile" },
// ];
// for (let animal of animals_obj) {
//     console.log(`${animal['name']}, ${animal['species']}`)
//     console.log();
// }
