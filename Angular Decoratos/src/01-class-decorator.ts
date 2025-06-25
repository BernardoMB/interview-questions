// Declare a class decorator

// Decorators are simple functions
// The parameter targetClass will be the class that this decorator will decorate. Classes in javascript are functions.
function MyDecorator(targetClass: Function) {
    targetClass.prototype.myProperty = 1;
}

// Decorate the class with the decorator

@MyDecorator
export class MyClass {
    myProperty: Number;
}

console.log(new MyClass().myProperty); // 1
