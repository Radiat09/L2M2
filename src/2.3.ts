{
  //*** Generic type alias ***//

  type GenericArray<T> = Array<T>; // generic type alias for array

  //   const rollNumbers: number[] = [1, 2, 3, 4, 5]; // array of numbers

  //   const rollNumbers: Array<number> = [1, 2, 3, 4, 5]; // array of numbers

  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5]; // array of numbers

  //   const mentors: string[] = ["John", "Jane", "Jack"]; // array of strings

  //   const mentors: Array<string> = ["John", "Jane", "Jack"]; // array of strings

  const mentors: GenericArray<string> = ["John", "Jane", "Jack"]; // array of strings

  //   const boolArray: boolean[] = [true, false, true]; // array of booleans

  // const boolArray: Array<boolean> = [true, false, true]; // array of booleans

  const boolArray: GenericArray<boolean> = [true, false, true]; // array of booleans

  type Singleuser = { name: string; age: number };

  const user: GenericArray<Singleuser> = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 25,
    },
  ];

  // *** Generic Tuple ***//

  type GenericTuple<T1, T2> = [T1, T2]; // generic tuple type alias

  const manus: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];
}
