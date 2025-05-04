{
  // ### Task 7: Type Assertion and Narrowing
  // - Objective**: Write a function that behaves differently based on the input type.
  // - Instructions**:
  // - Create a function that accepts a parameter of type `string | number`.
  // - The function should:
  // - Return the length if the input is a string.
  // - Return the square if the input is a number.

  const differentlyBehavedFunction = (arg: string | number): number => {
    if (typeof arg === "string") {
      return arg?.length;
    } else if (typeof arg === "number") {
      return arg * arg;
    } else {
      throw "Unsupported type";
    }
  };

  const res1 = differentlyBehavedFunction("Wallo");
  console.log(res1);
}
