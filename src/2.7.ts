{
  // ** Generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually defined
  type Owner2 = keyof Vehicle; //automatically defined
  const person: Owner2 = "bike"; //automatically defined

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
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
