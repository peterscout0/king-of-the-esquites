import { Injectable } from '@angular/core';
import { Producto, Categoria } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private categorias: Categoria[] = [
    { nombre: 'Esquites Original', imagen: '/assets/images/esquites/original-esquite.png' },
    { nombre: 'Esquites Tortrix', imagen: '/assets/images/esquites/tortrix/tortrix-detodito2.png' },
    { nombre: 'Esquites Diana', imagen: '/assets/images/esquites/diana/tozteca.png' },
    { nombre: 'Esquites Señorial', imagen: '/assets/images/esquites/doritos/dorito-rojo.png' },
    { nombre: 'Salsas', imagen: '/assets/images/sauces/chipotle.png' },
    { nombre: 'Bebidas', imagen: '/assets/images/drinks/nuclear.png' },
    // { nombre: 'Combos', imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png' },
    // { nombre: 'Para Compartir', imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png' }
  ];

  private productos: Producto[] = [
    { nombre: 'La Tremenda', precio: 65, imagen: '/assets/images/esquites/colocha.png', categoria: 'Esquites Original', textoHover: 'Pedir', numeroWhatsApp: '1234567890' },
    { nombre: 'La Carnuda', precio: 35, imagen: '/assets/images/esquites/original-no-picante.png', categoria: 'Esquites Original', esNuevo: true, mensajeNuevo: 'Nuevo', colorFondoNuevo: '#b41515', rotacionNuevo: '315deg' },
    { nombre: 'La Carnuda', precio: 35, imagen: '/assets/images/esquites/original-esquite2.png', categoria: 'Esquites Original' },
    { nombre: 'La Carnuda', precio: 35, imagen: '/assets/images/esquites/original-esquite2.png', categoria: 'Esquites Original' },
    { nombre: 'La Carnuda', precio: 35, imagen: '/assets/images/esquites/original-esquite2.png', categoria: 'Esquites Original' },

    // Productos de Esquites Tortrix
    { nombre: 'Tortrix Clásico', precio: 45, imagen: '/assets/images/esquites/tortrix/tortrix-classic.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Tortrix Barbacoa', precio: 50, imagen: '/assets/images/esquites/tortrix/tortrix-barbacoa.png', categoria: 'Esquites Tortrix' },
    { nombre: 'Tortrix Picante', precio: 55, imagen: '/assets/images/esquites/tortrix/tortrix-picante.png', categoria: 'Esquites Tortrix' },

    // Productos de Esquites Diana
    { nombre: 'Diana Clásico', precio: 40, imagen: '/assets/images/esquites/diana/diana-classic.png', categoria: 'Esquites Diana' },
    { nombre: 'Diana Picante', precio: 45, imagen: '/assets/images/esquites/diana/diana-picante.png', categoria: 'Esquites Diana' },

    // Productos de Esquites Señorial
    { nombre: 'Señorial Regular', precio: 50, imagen: '/assets/images/esquites/doritos/dorito-regular.png', categoria: 'Esquites Señorial' },
    { nombre: 'Señorial Picante', precio: 55, imagen: '/assets/images/esquites/doritos/dorito-picante.png', categoria: 'Esquites Señorial' },

    // Productos de Salsas
    { nombre: 'Salsa Chipotle', precio: 30, imagen: '/assets/images/sauces/chipotle.png', categoria: 'Salsas' },
    { nombre: 'Salsa Verde', precio: 25, imagen: '/assets/images/sauces/verde.png', categoria: 'Salsas' },

    // Productos de Bebidas
    { nombre: 'Bebida Nuclear', precio: 20, imagen: '/assets/images/drinks/nuclear.png', categoria: 'Bebidas' },
    { nombre: 'Bebida Tropical', precio: 20, imagen: '/assets/images/drinks/tropical.png', categoria: 'Bebidas' },

    // Productos de Combos
    { nombre: 'Combo Familiar', precio: 150, imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png', categoria: 'Combos' },
    { nombre: 'Combo Amigos', precio: 100, imagen: '/assets/images/esquites/tortrix/tortrix-detodito3.png', categoria: 'Combos' },

    // Productos de Para Compartir
    { nombre: 'Para Compartir Grande', precio: 120, imagen: '/assets/images/esquites/tortrix/tortrix-detodito2.png', categoria: 'Para Compartir' },
    { nombre: 'Para Compartir Pequeño', precio: 80, imagen: '/assets/images/esquites/tortrix/tortrix-barbacoa.png', categoria: 'Para Compartir' }
  ];
  

  constructor() { }

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  getProductos(categoria: string): Producto[] {
    return this.productos.filter(producto => producto.categoria === categoria);
  }
}
