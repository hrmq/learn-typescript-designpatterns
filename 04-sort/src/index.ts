import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollections';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);