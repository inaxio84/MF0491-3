import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../providers/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  precioDescuento:number;
  productos : Producto[]; //Array<Receta>
  producto:Producto;

  constructor(private productoService : ProductoService ) {
    console.log('ProductosComponent constructor');

  }

  ngOnInit() {
    console.log('ProductosComponent ngOnInit');
    this.productos = this.productoService.getAll();
  }

  increaseValue(producto){

    this.producto.cantidad=producto.cantidad++;

  }

  decreaseValue(producto){
    if(producto.cantidad>0){
      this.producto.cantidad=producto.cantidad--;
    }

  }
  

}
