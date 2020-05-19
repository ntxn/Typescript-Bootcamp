class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car2 = new Car(4, 'red');
car2.startDrivingProcess();

// can't call cars.drive() because drive is marked private, it can only be called within the class
