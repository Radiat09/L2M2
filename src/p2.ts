{
  // ### Task 2: Functions, Optional, and Literal Types

  // **Objective**: Create a function with parameters and an optional literal type.

  // **Instructions**:

  // - Define a function that takes:
  //   - `name` (string)
  //   - `age` (number)
  //   - `role` (optional, with type `'admin' | 'user' | 'guest'`)
  // - The function should log these values or perform a basic action.

  // ---

  type Role = {
    admin: string;
    user: string;
    guest: string;
  };

  type User = {
    name: string;
    age: number;
    role?: keyof Role;
  };

  const showSomething = (user: User) => {
    console.log(user);
    return user;
  };

  const user1: User = {
    name: "x",
    age: 33,
    role: "guest",
  };
  showSomething(user1);
}
