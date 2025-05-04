"use strict";
{
    //** */ Mapped types
    const arrayOfNumbers = [1, 4, 6];
    //   const arrayOfStrings: string[] = ["1", "2", "6"];
    const arrayOfStrings = arrayOfNumbers.map((num) => num.toString());
    const area1 = {
        height: "100",
        width: 30,
    };
}
