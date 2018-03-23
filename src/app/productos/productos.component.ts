import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../providers/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos : Producto[]=[]; //Array<Receta>
  producto:Producto;
  precioDescuento:number=0;
  carrito: Producto[]=[];
  precioTotal:number=0;
  totalProductos:number=0;


  constructor(private productoService : ProductoService ) {
    console.log('ProductosComponent constructor');

  }

  ngOnInit() {
    console.log('ProductosComponent ngOnInit');
    this.productos = this.productoService.getAll();

  }

  //funcion para incrementar las unidades de cada producto
  increaseValue(product:Producto){
    console.log('cantidad de %s: %s',product.nombre, product.cantidad);
    product.cantidad++;
    console.log('cantidad de %s: %s',product.nombre, product.cantidad);
  }
  //funcion para decrementar las unidades de cada producto
  decreaseValue(product:Producto){
    console.log('cantidad de %s: %s',product.nombre, product.cantidad);
    if(product.cantidad>0){
      product.cantidad--;
    }
    console.log('cantidad de %s: %s',product.nombre, product.cantidad);

  }
  //funcion para añadir un producto al carrrito
  addCarrito(product:Producto){
    console.log('%o',product);
    this.carrito.push(product);
    this.precioTotal+=(product.cantidad*product.precio);
    this.totalProductos+=product.cantidad;

  }

  vaciarCarrito(){
    this.carrito=[];
    this.precioTotal=0;

  }
  

}
