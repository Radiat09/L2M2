{
  //***Conditional Types

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  //keyof Sheikh  "bike" | "car" | "ship"

  //check if sheikh has car/bike/ship/tractor

  //   type CheckVechile<T> = T extends "bike" | "car" | "ship" ? true : false;

  type CheckVechile<T> = T extends keyof Sheikh ? true : false;

  type Has = CheckVechile<"tractor">;

  //
}
