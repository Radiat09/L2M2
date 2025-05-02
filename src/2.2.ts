{
  //** Interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "John",
    age: 30,
    role: "admin",
  };

  type RollNumber = number;

  //**  js---> object , array ---> object, function ---> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  //   const rollNumber: Roll1 = [1, 2, 3, 4, 5]; // array of numbers`

  const rollNumber: Roll2 = [1, 2, 3, 4, 5]; // array of numbers`

  type Add = (num1: number, num2: number) => number; // function type

  interface Add2 {
    (num1: number, num2: number): number; // function type
  }

  //   const add: Add = (num1, num2) => num1 + num2; // function type

  const add: Add2 = (num1, num2) => num1 + num2;
}
