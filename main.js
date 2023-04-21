// Write a function that checks if a given object is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
// There are no constraints on the data types that can be passed to the function.

// Example 1:
// Input: func = () => checkIfInstanceOf(new Date(), Date)
// Output: true
// Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

// Example 2:
// Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
// Output: true
// Explanation:
// class Animal {};
// class Dog extends Animal {};
// checkIfInstance(new Dog(), Animal); // true
// Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

// Example 3:
// Input: func = () => checkIfInstanceOf(Date, Date)
// Output: false
// Explanation: A date constructor cannot logically be an instance of itself.

// Example 4:
// Input: func = () => checkIfInstanceOf(5, Number)
// Output: true
// Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".

//////// first attempts ////////
class Animal {
  constructor(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = sound;
  }
}

class Dog extends Animal {
  warn = 'bark bark';
}

const fido = new Dog('fido', 'dog', 'woof woof');

// console.log(new Dog() instanceof Animal);
// console.log(fido instanceof Dog);
// console.log(fido instanceof Animal);
// let x = 5
// console.log(typeof x === 'number')

var checkIfInstanceOf = function (obj, classFunction) {
  let result = false;
  if (obj && classFunction) {

    const objProto = Object.getPrototypeOf(obj);
    const classFunctionProto = classFunction.prototype;

    if (objProto && classFunctionProto) {
      if (objProto === classFunctionProto) {
        return (result = true);
      } else if (obj instanceof classFunction) {
          return (result = true);
      }
    }    
  }
  return result;
};


////// solution section after searching the internet for hours //////////
function check(obj, classFunction) {
  while(obj!=null)
  {
      if(obj.constructor === classFunction)
      {
          return true;
      }

      obj = Object.getPrototypeOf(obj);

  }

  return false;
};


///// apparently this solution is correct. I'm not really sure why it's correct...//////
///// when I run it on VSCode it says it isn't correct but within the context of ///////
///// LeetCode it tests as viable solution. Maybe it's wording of the problem idk///////

console.log(check(Date, Date)); //p
console.log(check(new Dog(), Animal));//p
console.log(check(null, Animal));//p
console.log(check(null, undefined));//p
console.log(check(Date, undefined));//p
console.log(check([], []));
console.log(check([], Array));
console.log(check([], Object));
console.log(check(0, Object));

// console.log(Object.getPrototypeOf())
// console.log(Object.getPrototypeOf([]) === Array.prototype);
// console.log(Object.getPrototypeOf([]) === Object.prototype);
// console.log(Object.getPrototypeOf([]) === [].prototype);
// console.log(Object.getPrototypeOf(Date) === Date.prototype);
// console.log(new Dog() instanceof Animal);
// console.log(Object.getPrototypeOf(new Dog()) === Animal.prototype);
// console.log(new Dog().prototype)
// console.log(Object.getPrototypeOf(5) === Number.prototype);
// console.log({}.prototype)Array;
// console.log(Object.getPrototypeOf(Animal));
// console.log();

let x = undefined;
function checker(x) {
if (x) {
  console.log('yes')
} else {
  console.log('no')
}
}

// checker([])


// console.log(Object.getPrototypeOf(0) === Number.prototype)
// console.log(Number === Object)
// console.log(Number.prototype)

