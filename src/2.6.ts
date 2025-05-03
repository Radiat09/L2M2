{
  // *** Constraints  ***

  const addToStudent = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addToStudent({
    id: 1,
    name: "Ridoy",
    email: "x@y.com",
    age: 22,
  });

  const student2 = addToStudent({
    id: 121,
    name: "Habib",
    email: "f@f.com",
    age: 12,
    phone: "01700000000",
  });

  const student3 = addToStudent({
    id: 131,
    name: "Habibul",
    email: "2@j.com",
    favAnime: "Naruto",
  });
}
