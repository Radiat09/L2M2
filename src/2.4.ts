{
  //*Generic Type with Interfaces

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmailabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmailabWatch> = {
    name: "Persian",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch Series 7",
      display: "OLED",
    },
  };

  interface appleWatch {
    brand: string;
    model: string;
    heartMonitor: boolean;
    sleepMonitor: boolean;
  }

  interface bike {
    model: string;
    engine: string;
  }

  const richDeveloper: Developer<appleWatch, bike> = {
    name: "Richer",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch Series 7",
      heartMonitor: true,
      sleepMonitor: true,
    },
    bike: {
      model: "yamaha",
      engine: "electric",
    },
  };
}
