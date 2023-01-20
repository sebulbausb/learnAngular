import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string): any {
    let exceptions = ['of', 'the'];
    let stringArr = value.split(' ');
    let capitalized = stringArr.forEach((str) => {
      str.toLocaleUpperCase();
    });
    console.log(capitalized);

    // return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
