const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, Boolean, number] = ['brown', true, 40];
pepsi[0] = 40; // 40 is not assignable to type string

// Type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 50];
const tea: Drink = ['black', false, 0];
