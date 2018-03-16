import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

//Servicios
import { ProductoService } from './providers/producto.service';

//pipes
import { FilterPipe } from './pipes/filter.pipe'; 



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductoService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
