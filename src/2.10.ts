{
  //** */ Mapped types

  const arrayOfNumbers: number[] = [1, 4, 6];

  //   const arrayOfStrings: string[] = ["1", "2", "6"];

  const arrayOfStrings: string[] = arrayOfNumbers.map((num) => num.toString());

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //keyof AreaNumber => "height" | "width"

  //T => { height: string ; width: number }
  //Key => T["wdith"]

  type height = AreaNumber["height"]; // lookup type

  //   type AreaString = {
  //     [key in keyof AreaNumber]: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 30,
  };
}
