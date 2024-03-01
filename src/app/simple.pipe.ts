import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {

  transform(name: string, ...args: unknown[]): unknown {
    return 'Mr.' + name;
  }

}
