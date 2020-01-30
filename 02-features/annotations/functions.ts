const add = (a: number, b: number): number => {
  return a + b;
};

function devide(a: number, b: number): number {
  return a / b;
}

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
