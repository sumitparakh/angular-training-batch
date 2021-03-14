import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addArray',
})
export class AddArrayPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (typeof value.length === 'undefined') {
      throw new Error('Not an array. Please pass an array of numbers!!');
    }

    // [1,2,3,4]
    const sum = (value as number[]).reduce(
      (previousValue: number, currentValue: number) => {
        // 1st iteration:-
        // previousValue: 1
        // currentValue: 2
        // returnValue (CurrentValue): previousValue + currentValue: 1+2 = 3

        // Now the return value will become previousValue in each iteration
        return previousValue + currentValue;
      }
    );

    return sum;
  }
}
