{
  //*** */ Utility Types

  //** Pick */
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;

  type NameAge = Pick<Person, "name" | "age">;

  //** Omit */
  type ContactInfo = Omit<Person, "name" | "age">;

  //** Required */
  type PersonRequired = Required<Person>;

  //** Pertial */
  type PersonPertial = Partial<Person>;

  //** ReadOnly */
  type PersonReadOnly = Readonly<Person>;

  const Person: PersonReadOnly = {
    name: "X",
    age: 22,
    contactNo: "02921",
  };

  // Person.name = "aaa"; //Cannot assign to 'name' because it is a read-only property.

  //** Record  */
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  // type MyObj = Record<string, number>;
  type MyObj = Record<string, unknown>;

  // const EmptyObj: object = {};
  // const EmptyObj: {} = {};
  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 7,
  };
}
