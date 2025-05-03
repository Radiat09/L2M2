"use strict";
{
    // *** Function with Generic Type Parameter ***
    const createArray = (param) => {
        return [param];
    };
    const createArraywithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const resGeneric = createArraywithGeneric("Bangladesh");
    const resgenericObj = createArraywithGeneric({
        id: 222,
        name: "Mr. X",
    });
    // **Tuple
    const createTupleArraywithgeneric = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createTupleArraywithgeneric("Bnaghladesh", 222);
    const res4 = createTupleArraywithgeneric("Bnaghladesh", { name: "Mr. X" });
    const addToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addToStudent({
        name: "Ridoy",
        age: 22,
        id: 1,
        email: "x@y.com",
    });
    const student2 = addToStudent({
        name: "Habib",
        age: 12,
        phone: "01700000000",
    });
}
