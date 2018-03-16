import { Injectable } from '@angular/core';
import { Producto } from './../model/producto';
import { MOCKS_PRODUCTOS } from './mocks.productos';

@Injectable()
export class ProductoService {
  productos : Producto[];

  constructor() {
    console.log('ProductoService constructor');
  }

  getAll():Producto[]{
    console.log('ProductoService getAll');
    let jsonData = JSON.parse(MOCKS_PRODUCTOS.stock);
    this.productos = [];
    let producto;
  
    jsonData.forEach( el => {
       producto = new Producto();
       producto.nombre=el.nombre;
       producto.foto=el.foto;
       producto.precio=el.precio;
       producto.precio_ud=el.precio_ud;
       producto.descuento =el.descuento;
       producto.cantidad =el.cantidad;
      
       this.productos.push(producto);
    });


    return this.productos;
  }

}
