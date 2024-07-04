import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}

interface Categoria {
  nombre: string;
  imagen: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categorias: Categoria[] = [
    { nombre: 'Esquites Original', imagen: '/assets/images/esquites/original-esquite.png' },
    { nombre: 'Esquites Tortrix', imagen: '/assets/images/esquites/tortrix/tortrix-detodito2.png' },
    { nombre: 'Esquites Diana', imagen: '/assets/images/esquites/diana/tozteca.png' },
    { nombre: 'Esquites Señorial', imagen: '/assets/images/esquites/doritos/dorito-rojo.png' },
    { nombre: 'Salsas', imagen: '/assets/images/sauces/chipotle.png' },
    { nombre: 'Bebidas', imagen: '/assets/images/drinks/nuclear.png' },
    { nombre: 'Combos', imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png' },
    { nombre: 'Para Compartir', imagen: '/assets/images/esquites/tortrix/tortrix-jala-chapi.png' }
  ];
  productos: Producto[] = [
    { nombre: 'La Tremenda', precio: 65, imagen: '/assets/images/esquites/original-esquite.png', categoria: 'Esquites Original' },
    { nombre: 'La Carnuda', precio: 35, imagen: '/assets/images/esquites/original-esquite2.png', categoria: 'Esquites Original' },
    // Añade todos los productos necesarios
  ];
  productosFiltrados: Producto[] = [];

  categoriaSeleccionada: string = 'Esquites Original';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoriaSeleccionada = params['categoria'] ? decodeURIComponent(params['categoria']) : 'Esquites Original';
      this.filtrarProductos();
    });
  }

  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: { nombre: string, imagen: string }) {
    this.categoriaSeleccionada = categoria.nombre;
    this.filtrarProductos();
  }
}
