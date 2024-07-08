import { Injectable } from '@angular/core';
import { Producto, Categoria } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private categorias: Categoria[] = [
    { nombre: 'Esquites Original', imagen: 'assets/images/esquites/original-esquite.png' },
    { nombre: 'Esquites Tortrix', imagen: 'assets/images/esquites/tortrix/lg-tortrix.png' },
    { nombre: 'Esquites Doritos', imagen: 'assets/images/esquites/doritos/lg-doritos.png' },
    { nombre: 'Esquites Diana', imagen: 'assets/images/esquites/diana/lg-diana.png' },
    { nombre: 'Esquites Señorial', imagen: 'assets/images/esquites/senorial/lg-senorial.jpg' },
    // { nombre: 'Postres', imagen: 'assets/images/esquites/desserts/lg-postres.png' },
    { nombre: 'Bebidas', imagen: 'assets/images/drinks/drinks.png' },
    { nombre: 'Salsas', imagen: 'assets/images/sauces/lg-sauces.jpg' },
    // { nombre: 'Combos', imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png' },
    // { nombre: 'Para Compartir', imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png' }
  ];

  private productos: Producto[] = [
    { nombre: 'El Mamado', precio: 25, imagen: 'assets/images/esquites/original-esquite.png', categoria: 'Esquites Original' },
    { nombre: 'El Chiquito', precio: 20, imagen: 'assets/images/esquites/original-esquite2.png', categoria: 'Esquites Original' },
    { nombre: 'LotiNacho', precio: 40, imagen: 'assets/images/esquites/lotinacho.png', categoria: 'Esquites Original' },
    { nombre: 'El Sin Chile', precio: 25, imagen: 'assets/images/esquites/original-no-picante.png', categoria: 'Esquites Original' },
    { nombre: 'El Macarroni', precio: 30, imagen: 'assets/images/esquites/original-no-picante.png', categoria: 'Esquites Original', textoHover: 'Pedir', numeroWhatsApp: '1234567890', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'La Colocha', precio: 35, imagen: 'assets/images/esquites/colocha.png', categoria: 'Esquites Original', textoHover: 'Pedir', numeroWhatsApp: '1234567890' },

    // Productos de Esquites Tortrix
    { nombre: 'Esquite Barbacoa', precio: 20, imagen: 'assets/images/esquites/tortrix/tortrix-barbacoa-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chicharrón', precio: 20, imagen: 'assets/images/esquites/tortrix/tortrix-chicharron-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Limón', precio: 20, imagen: 'assets/images/esquites/tortrix/tortrix-limon-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Detodito', precio: 20, imagen: 'assets/images/esquites/tortrix/tortrix-detodito-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chapi Crema', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-crema-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chapi Jalapeño', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-jp-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chapi Barbacoa', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-bb-product.png', categoria: 'Esquites Tortrix' },

    // Productos de Esquite Dorito
    { nombre: 'Esquite Dorito Rojo', precio: 12, imagen: 'assets/images/esquites/doritos/dorito-rojo-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Rojo BG', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-rojo-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Verde', precio: 12, imagen: 'assets/images/esquites/doritos/dorito-verde-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Verde BG', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-verde-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Flamin', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-flamin-hot-product.png', categoria: 'Esquites Doritos' },

    // Productos de Esquites Diana
    { nombre: 'Esquite Diana Nacho', precio: 20, imagen: 'assets/images/esquites/diana/nacho-diana.png', categoria: 'Esquites Diana' },
    { nombre: 'Esquite Diana Jalapeño', precio: 20, imagen: 'assets/images/esquites/diana/jalapeno-diana.png', categoria: 'Esquites Diana' },
    { nombre: 'Esquite Diana Quesitos', precio: 20, imagen: 'assets/images/esquites/diana/quesitos-diana.png', categoria: 'Esquites Diana' },
    { nombre: 'Esquite Tozteca Spots', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-fire-spots-diana.png', categoria: 'Esquites Diana' },
    { nombre: 'Esquite Tozteca Pops', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-fire-pops-diana.png', categoria: 'Esquites Diana' },
    { nombre: 'Esquite Tozteca Original', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-original-diana.png', categoria: 'Esquites Diana' },

    // Productos de Esquites Señorial
    { nombre: 'Esquite Señorial Original', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-original-product.png', categoria: 'Esquites Señorial' },
    { nombre: 'Esquite Señorial Aritos', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-cebollitas-product.png', categoria: 'Esquites Señorial' },
    { nombre: 'Esquite Chicharrón', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-chicharron-bb-product.png', categoria: 'Esquites Señorial' },
    { nombre: 'Esquite Señorial Llama', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-llama-product.png', categoria: 'Esquites Señorial' },
    { nombre: 'Esquite Señorial Bolitas', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-bolitas-product.png', categoria: 'Esquites Señorial' },
    { nombre: 'Esquite Mix Quesifrito', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-mix-quesifrito-product.png', categoria: 'Esquites Señorial' },
    { nombre: 'Esquite Mix Aritos', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-mix-aritos-product.png', categoria: 'Esquites Señorial' },

    // Productos de Salsas
    { nombre: 'Salsa Chipotle (La Mary)', precio: 0, imagen: 'assets/images/sauces/chipotle-sauce.png', categoria: 'Salsas' },
    // { nombre: 'Salsa Verde', precio: 25, imagen: 'assets/images/sauces/verde.png', categoria: 'Salsas' },

    // Productos de Bebidas
    { nombre: 'Nuclear', precio: 15, imagen: 'assets/images/drinks/nuclear1.png', categoria: 'Bebidas' },
    { nombre: 'Plutonio', precio: 15, imagen: 'assets/images/drinks/plutonio.png', categoria: 'Bebidas' },
    { nombre: 'Mojito Sin Alcohol', precio: 15, imagen: 'assets/images/drinks/lemon.png', categoria: 'Bebidas' },
    { nombre: 'Tropical', precio: 15, imagen: 'assets/images/drinks/tropical.png', categoria: 'Bebidas' },
    { nombre: 'Mineral Preparada', precio: 20, imagen: 'assets/images/drinks/michelada.png', categoria: 'Bebidas' },
    { nombre: 'Michelada', precio: 25, imagen: 'assets/images/drinks/michelada.png', categoria: 'Bebidas' },

    // Productos de Combos
    { nombre: 'Combo Familiar', precio: 150, imagen: 'assets/images/esquites/tortrix/tortrix-jala-chapi.png', categoria: 'Combos' },
    { nombre: 'Combo Amigos', precio: 100, imagen: 'assets/images/esquites/tortrix/tortrix-detodito3.png', categoria: 'Combos' },

    // Productos de Para Compartir
    { nombre: 'Para Compartir Grande', precio: 120, imagen: 'assets/images/esquites/tortrix/tortrix-detodito2.png', categoria: 'Para Compartir' },
    { nombre: 'Para Compartir Pequeño', precio: 80, imagen: 'assets/images/esquites/tortrix/tortrix-barbacoa.png', categoria: 'Para Compartir' }
  ];
  

  constructor() { }

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getProductos(categoria: string): Producto[] {
    return this.productos.filter(producto => producto.categoria === categoria);
  }

  getAllProductos(): Producto[] {
    return this.productos;
  }
}
