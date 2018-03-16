import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../model/producto';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    /**
     * Filtro para buscar en una coleccion de productos. No es CaseSensitive
     */
  transform(productos: Producto[], searchText: string): Producto[] {

    //si no hay productos retornar vacío
    if(!productos) {return [];}

    let productosFilterArray: Producto[] = [];
    
    

    // filtramos por texto si hay
    if (!searchText) {
      return productosFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let producto = '';
      return productosFilterArray.filter(it => {
        producto = it.nombre;
        producto = producto.toLowerCase();
        return producto.includes(searchText);
      });
    }
  }

}