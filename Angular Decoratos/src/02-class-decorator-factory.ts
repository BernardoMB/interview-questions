// Declare a class decorator with a decorator factory to pass parameters to the decorator

// Decorator factories are used to pass configuration objects. In this case the option parameter is the configuration object
// Decorator factories simply return the decorator function
// The parameter target will be the class that this decorator will decorate
function MyDecorator(options: { someProperty: string }) {
    // When modifying an static property we need to tell the decorator the type of the targetClass using & typeof
    return (targetClass: Function & typeof MyClass) => {
        targetClass.myProperty = options.someProperty;
    };
}

// Decorate the class with the decorator that uses parameters

@MyDecorator({ 
    someProperty: "someValue" 
})
export class MyClass {
    static myProperty: string;
}

console.log(MyClass.myProperty); // someValue
