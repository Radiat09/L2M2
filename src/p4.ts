{
  // ### Task 4: Union and Intersection Types
  // **Objective**: Create union and intersection types using interfaces.
  // **Instructions**:
  // - Define interfaces `Book` and `Magazine`.
  // - Create:
  //   - A type that is a **union** of `Book` and `Magazine`.
  //   - A type that is an **intersection** of `Book` and `Magazine`.

  interface Book {
    name: string;
    author: string;
  }

  type Magazine = Book & {
    publishYear: string | number;
  };

  // ****Not Mine
  // Define the Book interface
  interface Book2 {
    title: string;
    author: string;
    isbn: string;
    pages: number;
  }

  // Define the Magazine interface
  interface Magazine2 {
    title: string;
    issueNumber: number;
    publicationDate: Date;
  }

  // Union type: Can be either Book OR Magazine
  type Publication = Book2 | Magazine2;

  // Intersection type: Must have ALL properties of both Book AND Magazine
  // (Note: This would only make sense if we had some shared properties we want to combine)
  type BookMagazineCombo = Book2 & Magazine2;
}
