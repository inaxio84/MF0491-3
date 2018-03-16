export class Producto{

    nombre : string;
    foto : string;
    precio : number;
    precio_ud : string;
    descuento : number;
    cantidad: number;
    
    constructor(){
        console.log('Producto constructor');
        this.nombre="Producto no encontrado";
        this.foto="../../assets/img/default.png";  
        this.precio = 1;
        this.precio_ud = "1";
        this.descuento = 0;
        this.cantidad = 1;

    }
    
}