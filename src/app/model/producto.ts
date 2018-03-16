export class Coche{

    nombre : string;
    foto : string;
    precio : number;
    precio_ud : string;
    oferta : boolean;
    precio_oferta: number;
    cantidad: number;
    
    constructor(){
        console.log('Producto constructor');
        this.nombre="Producto no encontrado";
        this.foto="../../assets/img/default.png";  
        this.precio = 1;
        this.oferta = false;
        this.precio_oferta = 1;
        this.cantidad = 1;

    }

}