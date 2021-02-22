import { sealed } from "./sealed";

@sealed
export class SealedDemo {
  greeting: string;
  constructor(msg: string) {
    this.greeting = msg;
  }

  greet() {
    console.log('Hello ' + this.greeting);
  }
}
