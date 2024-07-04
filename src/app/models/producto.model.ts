export interface Producto {
    nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  esNuevo?: boolean;
  mensajeNuevo?: string;
  colorFondoNuevo?: string;
  rotacionNuevo?: string;
  textoHover?: string;
  numeroWhatsApp?: string;
}

export interface Categoria {
    nombre: string;
    imagen: string;
}
