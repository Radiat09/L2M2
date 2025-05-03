{
  //**Promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  getTodo();

  //simulate

  type Something = {
    something: string;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise((resolve, reject) => {
      const data: Something = {
        something: "Hello World",
      };
      if (data) {
        resolve(data);
      } else {
        reject("Error: Something went wrong!");
      }
    });
  };

  //calling createPromise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };

  showData();
}
