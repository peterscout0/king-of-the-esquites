import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { ProductsService } from '../../services/products.service';
import { Producto, Categoria } from '../../models/producto.model';
import { gsap } from 'gsap';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  categorias: Categoria[] = [];
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  categoriaSeleccionada: string = 'Esquites Original';

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {
    this.categorias = this.productsService.getCategorias();
    this.route.params.subscribe(params => {
      this.categoriaSeleccionada = params['categoria'] ? decodeURIComponent(params['categoria']) : 'Esquites Original';
      this.productosFiltrados = this.productsService.getProductos(this.categoriaSeleccionada); // Mostrar la categoría por defecto
    });
  }

  filtrarProductos() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.productosFiltrados = this.productsService.getProductos(this.categoriaSeleccionada);
    } else {
      gsap.to('.product-card', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          this.productosFiltrados = this.productsService.getProductos(this.categoriaSeleccionada);
          gsap.fromTo('.product-card', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
      });
    }
  }

  seleccionarCategoria(categoria: { nombre: string, imagen: string }) {
    if (this.categoriaSeleccionada !== categoria.nombre) { // Solo filtrar si la categoría cambia
      this.categoriaSeleccionada = categoria.nombre;
      this.filtrarProductos();
    }
  }

  irAWhatsApp(numero: string) {
    const url = `https://wa.me/${numero}`;
    window.open(url, '_blank');
  }
}