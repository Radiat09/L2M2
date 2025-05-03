"use strict";
{
    const person = "bike"; //automatically defined
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "MR. X",
        age: 22,
        address: "Dhaka",
    };
    const car = {
        model: "Mercedes",
        year: 2022,
    };
    const res = getPropertyValue(user, "age");
    const res2 = getPropertyValue(car, "model");
}
