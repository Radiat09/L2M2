{
  // *** Function with Generic Type Parameter ***

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArraywithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const resGeneric = createArraywithGeneric<string>("Bangladesh");

  //   type User = { id: number; name: string };
  // or
  interface User {
    id: number;
    name: string;
  }

  const resgenericObj = createArraywithGeneric<User>({
    id: 222,
    name: "Mr. X",
  });

  // **Tuple

  const createTupleArraywithgeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res3 = createTupleArraywithgeneric<string, number>("Bnaghladesh", 222);

  const res4 = createTupleArraywithgeneric<string, { name: string }>(
    "Bnaghladesh",
    { name: "Mr. X" }
  );

  const addToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
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
