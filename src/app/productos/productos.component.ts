import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../providers/producto.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos : Producto[]; //Array<Receta>

  constructor(private productoService : ProductoService ) {
    console.log('ProductosComponent constructor');

  }

  ngOnInit() {
    console.log('ProductosComponent ngOnInit');
    this.productos = this.productoService.getAll();
  }

}
