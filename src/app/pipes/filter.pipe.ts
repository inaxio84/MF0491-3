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
    if (!productos) { return []; }
    if (!searchText) return productos;
    searchText = searchText.toLowerCase();
    let nombreProducto = "";
    let productosFilterArray: Producto[] = [];
    return productos.filter(productIt => {
      nombreProducto = productIt.nombre;
      nombreProducto = nombreProducto.toLowerCase();
      return nombreProducto.includes(searchText);
    });


  }

}