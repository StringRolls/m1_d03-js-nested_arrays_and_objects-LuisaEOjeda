// Class code examples
/*
const student1 = { name: "Bob", age: 17 };
const student2 = { name: "Susy", age: 18 };
const student3 = { name: "Ted", age: 18 };

const students = [
  { name: "Bob", age: 17 },
  { name: "Susy", age: 18 },
  { name: "Ted", age: 18 },
];

console.log(students[1]);
console.log(students[1].age);

console.log(students[1].age);
console.log(students[students.indexOf("Susy")]); // Thsi will not work

const Bob = { name: "Bob", age: 17 };
const Susy = { name: "Susy", age: 18 };
const Ted = { name: "Ted", age: 18 };
const Aleix = { name: "Aleix", age: 20 };
const Marco = { name: "Marco", age: 18 };

const studentsDictionary = {
  Bob: Bob,
  Susy,
  Ted,
  Aleix,
  Marco,
};

console.log(studentsDictionary.Susy.age)

//LOOP thorugh the object

// for ... in the

for(const student in studentsDictionary){
    console.log(studentsDictionary[student])
}

// for ... of

for (const student of studentsList){
    console.log(student.age)
}


const studentsObj = {
    Bob: {name: "Bob", age: 17},
    Susy : {name: "Susy", age: 18},
    Ted : {name: "Ted", age: 18}
}

console.log(studentsObj.Susy.age)
studentsObj.hasOwnProperty("Susy")
studentsObj.hasOwnProperty("Marco")


const classroom = {
    marco: { name: "Marco", friends: [{name: "Paolo", age: 49}] },
    carlos: { name: "Carlos", friends: [ {name: "Gabriel", age: 45}] },
    carol: { name: "Carol", friends: [{name: "Bob", age: 17}, {name: "Susy", age: 18}, {name: "Ted", age: 18}] }
}

console.log(classroom.carlos.friends.length)

classroom.friends.push()

for(const friend of classroom.carol.friends) console.log(friend.name)

*/

// Example 2

    const drinks = [
        {
            name: 'Fanta',
            sugar: true,
            price: 1,
            weight: .56,
            ingredients: ['water', 'sugar', 'sweetener']
        },
        {
            name: 'Jagger',
            sugar: true,
            price: 3,
            weight: .96,
            ingredients: ['fantasía', 'alcohol', 'mabad decisions']
        }
    ]

for (const drink of drinks){
    
for (const ingredient of drinks[0].ingredients){

    console.log(`One ingredient of ${drink.name}: `, ingredient)
}
}

    /*
    // Array of objects iteration
    for (let i = 0; i < drinks.length; i++) {

        console.log(`The drink ${drinks[i].name} weight ${drinks[i].weight}. The ingredientes are:`)

        for (let j = 0; j < drinks[i].ingredients.length; j++) {
            console.log('- ', drinks[i].ingredients[j])
        }
    }


    drinks.forEach(drink => {
        console.log(`The drink ${drink.name} weight ${drink.weight}. The ingredients are:`)
        drink.ingredients.forEach(ing => console.log('- ', ing))
    })
*/
