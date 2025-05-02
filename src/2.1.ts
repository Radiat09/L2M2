{
  //** type assertion
  let anything: any;
  anything = "Next Level Web Development";
  anything = 999;
  // (anything as string).length; // 30
  // (anything as number).toFixed(2); // 999.00

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue} grams`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(5) as number; // 5000
  const result2 = kgToGm("5") as string; // "The converted value is 5000 grams"

  type CustomError = {
    messgae: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).messgae); // Type 'unknown' is not assignable to type 'CustomError'
  }
}
