const carMakers = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => car.toUpperCase());

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-12');
importantDates.push(new Date());
importantDates.push(10);
