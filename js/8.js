console.log('task 8');

let myMap = new Map();
myMap.set('key', 'prop');
myMap.set('x', 'y');
myMap.set(true,123)

console.log(myMap.keys())
console.log(myMap.values())

for (let name of myMap.values()){
    console.log ('значение свойства', name)
}
for (let name of myMap.keys()){
    console.log ('значение свойства', name)
}