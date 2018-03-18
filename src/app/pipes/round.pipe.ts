//filtro para redondear a 2 decimales el precio en oferta

import { Pipe } from "@angular/core";


@Pipe({name: 'round'})
export class RoundPipe {
  transform (input:number) {
    return input.toFixed(2);
  }
}