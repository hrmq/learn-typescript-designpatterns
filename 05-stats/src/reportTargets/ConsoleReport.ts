import { OutputTarget } from '../Summary';

export class ConsoleReport implements OutputTarget {
  print(outputTarger: string): void {
    console.log(outputTarger);
  }
}
