interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  corbinated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} grmas of sugar`;
  }
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
