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
    // { nombre: 'Esquites Señorial', imagen: 'assets/images/esquites/senorial/lg-senorial.jpg' },
    { nombre: 'Perros Calientes', imagen: 'assets/images/hot-dogs/menu-hot-dog.jpg' },
    // { nombre: 'Aperitivos', imagen: 'assets/images/aperitivos/aperitivos.png' },
    // { nombre: 'Postres', imagen: 'assets/images/esquites/desserts/lg-postres.png' },
    { nombre: 'Bebidas', imagen: 'assets/images/drinks/drinks.png' },
    // { nombre: 'Combos', imagen: 'assets/images/combos/combo2.png' },
    // { nombre: 'Salsas', imagen: 'assets/images/sauces/lg-sauces.jpg' },
    // { nombre: 'Para Compartir', imagen: 'assets/images/esquites/tortrix/tortrix-jala-chapi.png' }
  ];

  private productos: Producto[] = [
    { nombre: 'El Chiquito', precio: 20, imagen: 'assets/images/esquites/original-esquite3.png', categoria: 'Esquites Original' },
    { nombre: 'El Mamado', precio: 25, imagen: 'assets/images/esquites/original-esquite3.png', categoria: 'Esquites Original' },
    // { nombre: 'El Sin Chile', precio: 25, imagen: 'assets/images/esquites/macarroni.png', categoria: 'Esquites Original' },
    // { nombre: 'El Macarroni', precio: 30, imagen: 'assets/images/esquites/macarroni.png', categoria: 'Esquites Original', textoHover: 'Pedir', numeroWhatsApp: '', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'La Colocha', precio: 35, imagen: 'assets/images/esquites/colocha.png', categoria: 'Esquites Original', textoHover: 'Pedir', numeroWhatsApp: '' },
    { nombre: 'LotiNacho', precio: 40, imagen: 'assets/images/esquites/lotinacho.png', categoria: 'Esquites Original' },
    // { nombre: 'Nachos de la Casa', precio: 40, imagen: 'assets/images/esquites/nachosdelacasa.png', categoria: 'Esquites Original', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'El Empalado', precio: 15, imagen: 'assets/images/esquites/empalado2.png', categoria: 'Esquites Original', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'La Mazorca', precio: 20, imagen: 'assets/images/esquites/mazorca.png', categoria: 'Esquites Original', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },

    // Productos de Esquites Tortrix
    { nombre: 'Esquite Barbacoa', precio: 25, imagen: 'assets/images/esquites/tortrix/tortrix-barbacoa-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chicharrón', precio: 25, imagen: 'assets/images/esquites/tortrix/tortrix-chicharron-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Limón', precio: 25, imagen: 'assets/images/esquites/tortrix/tortrix-limon-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Detodito', precio: 25, imagen: 'assets/images/esquites/tortrix/tortrix-detodito-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chapi original', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-or-product.png', categoria: 'Esquites Tortrix', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Esquite Chapi Crema', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-crema-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chapi Jalapeño', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-jp-product.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Esquite Chapi Barbacoa', precio: 35, imagen: 'assets/images/esquites/tortrix/tortrix-cn-bb-product.png', categoria: 'Esquites Tortrix' },

    // Productos de Esquite Dorito
    { nombre: 'Esquite Dorito Rojo', precio: 13, imagen: 'assets/images/esquites/doritos/dorito-rojo-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Rojo BG', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-rojo-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Verde', precio: 13, imagen: 'assets/images/esquites/doritos/dorito-verde-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Verde BG', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-verde-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Queso', precio: 13, imagen: 'assets/images/esquites/doritos/dorito-queso-product.png', categoria: 'Esquites Doritos' },
    { nombre: 'Esquite Dorito Queso BG', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-queso-product.png', categoria: 'Esquites Doritos' },
    // { nombre: 'Esquite Dorito Flamin', precio: 25, imagen: 'assets/images/esquites/doritos/dorito-flamin-hot-product.png', categoria: 'Esquites Doritos' },
    // { nombre: 'Esquite Dorito Dinámita', precio: 15, imagen: 'assets/images/esquites/doritos/dorito-dinamita-product.png', categoria: 'Esquites Doritos' },

    // Productos de Esquites Diana
    { nombre: 'Esquite Diana Nacho', precio: 20, imagen: 'assets/images/esquites/diana/nacho-diana.png', categoria: 'Esquites Diana' },
    { nombre: 'Esquite Diana Jalapeño', precio: 20, imagen: 'assets/images/esquites/diana/jalapeno-diana.png', categoria: 'Esquites Diana' },
    // { nombre: 'Esquite Diana Quesitos', precio: 20, imagen: 'assets/images/esquites/diana/quesitos-diana.png', categoria: 'Esquites Diana' },
    // { nombre: 'Esquite Diana Mix', precio: 20, imagen: 'assets/images/esquites/diana/diana-mix-picante.png', categoria: 'Esquites Diana', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Esquite Tozteca Spots', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-fire-spots-diana.png', categoria: 'Esquites Diana', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Esquite Tozteca Pops', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-fire-pops-diana.png', categoria: 'Esquites Diana', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    // { nombre: 'Esquite Tozteca Drops', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-wild-drops-diana.png', categoria: 'Esquites Diana', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    // { nombre: 'Esquite Tozteca Original', precio: 25, imagen: 'assets/images/esquites/diana/tozteca-original-diana.png', categoria: 'Esquites Diana' },

    // Productos de Esquites Señorial
    // { nombre: 'Esquite Señorial Original', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-original-product.png', categoria: 'Esquites Señorial' },
    // { nombre: 'Esquite Señorial Aritos', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-cebollitas-product.png', categoria: 'Esquites Señorial' },
    // { nombre: 'Esquite Chicharrón', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-chicharron-bb-product.png', categoria: 'Esquites Señorial' },
    // { nombre: 'Esquite Señorial Llama', precio: 20, imagen: 'assets/images/esquites/senorial/senorial-llama-product.png', categoria: 'Esquites Señorial', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg'  },
    // { nombre: 'Esquite Señorial Bolitas', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-bolitas-product.png', categoria: 'Esquites Señorial' },
    // { nombre: 'Esquite Mix Quesifrito', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-mix-quesifrito-product.png', categoria: 'Esquites Señorial' },
    // { nombre: 'Esquite Mix Aritos', precio: 0, imagen: 'assets/images/esquites/senorial/senorial-mix-aritos-product.png', categoria: 'Esquites Señorial' },
    
    // Productos Aperitivos
    // { nombre: 'Pan Guanaco', precio: 15, imagen: 'assets/images/aperitivos/pan-guanaco.png', categoria: 'Aperitivos', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    // { nombre: 'Pan con Pollo', precio: 10, imagen: 'assets/images/aperitivos/pan-pollo.png', categoria: 'Aperitivos', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    // { nombre: 'Enchilada', precio: 12, imagen: 'assets/images/aperitivos/enchilada.png', categoria: 'Aperitivos', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    // { nombre: 'Tostada con pollo', precio: 7, imagen: 'assets/images/aperitivos/tostada-pollo.png', categoria: 'Aperitivos', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    
    { nombre: 'Hot Dog Pizza', precio: 25, imagen: 'assets/images/hot-dogs/hot-dog-esquite.png', categoria: 'Perros Calientes', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Hot Dog Tradicional', precio: 25, imagen: 'assets/images/hot-dogs/hot-dog-tradicional.png', categoria: 'Perros Calientes', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Hot Dog Porquis', precio: 30, imagen: 'assets/images/hot-dogs/hot-dog-porquis.png', categoria: 'Perros Calientes', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },

    // Productos de Salsas
    // { nombre: 'Salsa Chipotle (La Mary)', precio: 0, imagen: 'assets/images/sauces/chipotle-sauce.png', categoria: 'Salsas' },
    // { nombre: 'Salsa Verde', precio: 25, imagen: 'assets/images/sauces/verde.png', categoria: 'Salsas' },

    // Productos de Bebidas
    { nombre: 'Nuclear (Blue, Manzana)', precio: 15, imagen: 'assets/images/drinks/nuclear1.png', categoria: 'Bebidas' },
    { nombre: 'Plutonio (Manzana)', precio: 15, imagen: 'assets/images/drinks/plutonio.png', categoria: 'Bebidas' },
    { nombre: 'Tropical (Sandía, Melón)', precio: 15, imagen: 'assets/images/drinks/tropical.png', categoria: 'Bebidas' },
    { nombre: 'Mojito Sin Alcohol', precio: 15, imagen: 'assets/images/drinks/lemon.png', categoria: 'Bebidas', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Mineral Preparada', precio: 15, imagen: 'assets/images/drinks/michelada.png', categoria: 'Bebidas' },
    { nombre: 'Michelada (Gallo)', precio: 25, imagen: 'assets/images/drinks/michelada.png', categoria: 'Bebidas' },
    { nombre: 'Mountain Dew', precio: 6, imagen: 'assets/images/drinks/mountain-dew.png', categoria: 'Bebidas' },
    { nombre: 'Coca-Cola', precio: 6, imagen: 'assets/images/drinks/coca.png', categoria: 'Bebidas' },
    { nombre: 'Pepsi', precio: 6, imagen: 'assets/images/drinks/pepsi.png', categoria: 'Bebidas' },
    { nombre: 'Seven-Up', precio: 6, imagen: 'assets/images/drinks/seven.png', categoria: 'Bebidas' },
    { nombre: 'Mirinda', precio: 6, imagen: 'assets/images/drinks/mirinda.png', categoria: 'Bebidas' },
    { nombre: 'Grapette', precio: 6, imagen: 'assets/images/drinks/grapette.png', categoria: 'Bebidas' },
    { nombre: 'Naranjada', precio: 6, imagen: 'assets/images/drinks/naranjada.png', categoria: 'Bebidas', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'Jugo Frutal', precio: 6, imagen: 'assets/images/drinks/jugo-frutal.png', categoria: 'Bebidas' },
    { nombre: 'Botella con Agua', precio: 5, imagen: 'assets/images/drinks/agua-salvavida.png', categoria: 'Bebidas' },

    // Productos de Combos
    { nombre: '¡Te Atreves! Combo 1', precio: 30, imagen: 'assets/images/combos/combo1.png', categoria: 'Combos' },
    { nombre: 'Compadres Combo 2', precio: 45, imagen: 'assets/images/combos/combo2.png', categoria: 'Combos' },
    // { nombre: 'Los Paisanos Combo 3', precio: 50, imagen: 'assets/images/combos/combo3.png', categoria: 'Combos' },
    { nombre: 'La Hambreada Combo 3', precio: 40, imagen: 'assets/images/combos/combo4.png', categoria: 'Combos' },
    { nombre: 'Hot Dog Combo 4', precio: 40, imagen: 'assets/images/combos/combo5.png', categoria: 'Combos', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
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
