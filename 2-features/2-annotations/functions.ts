const add = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  // never reach the end
  throw new Error(message);
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todayWeather);
