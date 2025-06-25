// Declare the property decorator
function MyPropertyDecorator(
    target: Object, // Reflects the object
    propertyName: string // The name of the property this decorator will decorate
) {
    // For this example we can modify the accessor methods of the property
    let value: number;
    const getter = () => {
        console.log('Getting value ...');
        return value;
    };
    const setter = (newValue: number) => {  
        console.log(`Setting value to ${newValue}`);
        value = newValue;
    };
    // Tell the object that we have defined these functions
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter
    });
}

export class MyClass {
    @MyPropertyDecorator    
    myProperty: number;
}

const myClass = new MyClass();
myClass.myProperty = 1;
console.log(myClass.myProperty);
