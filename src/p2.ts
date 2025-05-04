{
  type Role = {
    admin: string;
    user: string;
    guest: string;
  };

  type User = {
    name: string;
    age: number;
    role: keyof Role;
  };

  const showSomething = (user: User) => {
    console.log(user);
    return user;
  };

  const user: User = {
    name: "x",
    age: 33,
    role: "guest",
  };
  showSomething(user);
}
