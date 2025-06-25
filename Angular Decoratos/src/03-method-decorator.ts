// Define decorator for functions

function MyMethodDecorator(
    target: Object, // target prototype object. In this case it is the prototype of the function this decorator will decorate
    propertyKey: string, // propertyKey is the name of the function
    propertyDescriptor: PropertyDescriptor // propertyDescriptor describes the method 
) {
    console.log(target);
    console.log(propertyKey);
    // Override the actual function
    propertyDescriptor.value = function(...args: any[]) {
        // Add you custom logic
        return `Hello ${args}`;
    }; 
}

export class MyClass {
    myProperty: number;
    @MyMethodDecorator
    myMethod(myParam: string = '') {
        return myParam + 'something else';
    }
}

console.log(new MyClass().myMethod('Bernardo'));

// TODO: Create a decorator factory this method decorator
