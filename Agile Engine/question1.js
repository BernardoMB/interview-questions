function academicNotes(objectNotes) {
    console.log('Initial solution - academicNotes')
    // Implement function
    if (!objectNotes) throw new Error('Not an Object');
    if (Array.isArray(objectNotes)) throw new Error('Not an Object');
    if (Object.keys(objectNotes).length == 0) throw new Error('Object is Empty');
    let accumulatedPercentage = 0;
    let accumulatedNote = 0;
    for (const key in objectNotes) {
        // Validatino on keys
        console.log(key);
        if (
            !key ||
            isNaN(key) ||
            key == 'undefined' ||
            key == 'null'
        ) {
            throw new Error('Some key is Not a Number');
        }
        if (key < 0 || 5 < key) {
            throw new Error('Some key is Out of Range allowed');
        }
        // Validations on value
        if (
            isNaN(objectNotes[key]) ||
            objectNotes[key] % 1 != 0
        ) {
            throw new Error('Some key is Not an Integer');
        }
        if (objectNotes[key] < 0 || 100 < objectNotes[key]) {
            throw new Error('Some value is Out of Range allowed');
        }
        accumulatedPercentage += objectNotes[key];
        if (accumulatedPercentage > 100) {
            throw new Error('Total sum of percentage values exceeds the maximum allowed');
        }
        accumulatedNote += key*objectNotes[key];
    }

    return { accumulatedPercentage, accumulatedNote };

    //return  { accumulatedPercentage: 70, accumulatedNote: 2.09 } (Object as example)

    // throw new Error
        // 'Not an Object' ||
        // 'Object is Empty' ||
        // 'Some key is Not a Number' ||    <!-null, undefined, empty, not a number-->
        // 'Some key is Out of Range allowed' ||
        // 'Some value is Not an Integer' ||    <!-null, undefined, empty, not a number, not an integer-->
        // 'Some value is Out of Range allowed' ||
        // 'Total sum of percentage values exceed the maximum allowed'
}

module.exports = {
    academicNotes
}

academicNotes({ 2.9: 40, null: 30 });
