console.log("Shallow Copy List Example");

const foo = [
    'hello',
    'bonjour',
    'konnichiwa'
  ];

  ShallowCopy(foo);
 console.log(foo);
  

  function ShallowCopy(data)
  {
    const bar = [...foo]; 
    console.log(bar);
  }


  console.log("Shallow Copy Object");

  var obj = { Name: "Nidhin", Address: "Piravom",District:"Ernakulam" };
  console.log(obj);

var clonedObj = Object.assign({}, obj);

console.log(clonedObj);


console.log("Deep Clone List");

let nestedArray = [1, 2, 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray)); 
console.log(arrayCopy);


arrayCopy[0] = '👦'; 
arrayCopy[1] = 'nid'; 
console.log(arrayCopy);


console.log(nestedArray); 


console.log("Deep Clone Object");

// Deep Clone
obj = { a: 0 , b: { c: 0}};
let deepClone = JSON.parse(JSON.stringify(obj));
obj.a = 5;
obj.b.c = 5;
console.log(JSON.stringify(obj));
console.log(JSON.stringify(deepClone)); 

deepClone.a = 6;
deepClone.b.c = 6;
console.log(JSON.stringify(obj)); 
console.log(JSON.stringify(deepClone)); 


