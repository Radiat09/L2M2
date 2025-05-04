{
  //     ### Task 3: Object Types, Type Alias, & Literal Types
  // **Objective**: Define a structured `Person` object using Type Aliases.
  // **Instructions**:
  // - Define a `Person` type alias with properties for `Name`, `Address`, `Hair and Eye Color`, `Income and Expense`, `Hobbies`, `Family Members`, `Job`, `Skills`, `Marital Status`, and `Friends`.
  // ---

  type HairAndEyeColor = {
    hair: string;
    eye: string;
  };
  type IncomeAndExpense = {
    income: number;
    Expense: number;
  };

  type Person = {
    name: string;
    address: string;
    hairAndEyeColor: HairAndEyeColor;
    incomeExpense: IncomeAndExpense;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: string;
    friends: string[];
  };

  const hairAndEyeColor: HairAndEyeColor = {
    hair: "Black",
    eye: "Red",
  };

  const incomeAndExpense: IncomeAndExpense = {
    income: 200000,
    Expense: 900000,
  };

  const person: Person = {
    name: "X",
    address: "Bangladesh",
    hairAndEyeColor: hairAndEyeColor,
    incomeExpense: incomeAndExpense,
    hobbies: ["Browsing Internet", "Watching Anime"],
    familyMembers: ["X", "T", "F"],
    job: "Next Level Web Developer",
    friends: ["Habib", "Riad"],
    maritalStatus: "Single",
    skills: ["React", "JS", "NodeJS", "MySQL"],
  };

  console.log(person);
}
