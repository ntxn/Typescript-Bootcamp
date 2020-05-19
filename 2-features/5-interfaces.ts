const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const cola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}`;
  },
};

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(
    `Name: ${vehicle.name}. Year: ${vehicle.year}. Borken: ${vehicle.broken}`
  );
};

printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}

const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printReport(oldCivic);
printReport(cola);
