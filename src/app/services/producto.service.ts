import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
  stock: number;
  caracteristicas: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: "Smartphone Galaxy S24",
      descripcion: "El último smartphone de Samsung con tecnología de IA avanzada y cámara profesional.",
      precio: 999.99,
      categoria: "Electrónicos",
      imagen: "https://via.placeholder.com/300x200?text=Galaxy+S24",
      stock: 15,
      caracteristicas: ["Pantalla 6.2\" AMOLED", "Cámara 50MP", "Batería 4000mAh", "Procesador Snapdragon 8 Gen 3"]
    },
    {
      id: 2,
      nombre: "Laptop MacBook Pro",
      descripcion: "Potente laptop para profesionales con chip M3 y pantalla Liquid Retina.",
      precio: 1499.99,
      categoria: "Electrónicos",
      imagen: "https://via.placeholder.com/300x200?text=MacBook+Pro",
      stock: 8,
      caracteristicas: ["Chip M3", "Pantalla 14\" Liquid Retina", "16GB RAM", "512GB SSD"]
    },
    {
      id: 3,
      nombre: "Auriculares Sony WH-1000XM5",
      descripcion: "Auriculares inalámbricos con cancelación de ruido líder en la industria.",
      precio: 349.99,
      categoria: "Electrónicos",
      imagen: "https://via.placeholder.com/300x200?text=Sony+WH-1000XM5",
      stock: 25,
      caracteristicas: ["Cancelación de ruido activa", "30h de batería", "Bluetooth 5.2", "Control táctil"]
    },
    {
      id: 4,
      nombre: "Camiseta Nike Dri-FIT",
      descripcion: "Camiseta deportiva de alto rendimiento con tecnología de secado rápido.",
      precio: 45.99,
      categoria: "Ropa",
      imagen: "https://via.placeholder.com/300x200?text=Nike+Dri-FIT",
      stock: 50,
      caracteristicas: ["Material Dri-FIT", "Ligera y transpirable", "Secado rápido", "Múltiples talles"]
    },
    {
      id: 5,
      nombre: "Cafetera Nespresso",
      descripcion: "Cafetera automática para disfrutar del mejor café en casa.",
      precio: 199.99,
      categoria: "Hogar",
      imagen: "https://via.placeholder.com/300x200?text=Nespresso",
      stock: 12,
      caracteristicas: ["19 bares de presión", "Calentamiento rápido", "Sistema de cápsulas", "Fácil limpieza"]
    },
    {
      id: 6,
      nombre: "Reloj Apple Watch Series 9",
      descripcion: "El reloj inteligente más avanzado con monitoreo de salud integral.",
      precio: 399.99,
      categoria: "Electrónicos",
      imagen: "https://via.placeholder.com/300x200?text=Apple+Watch+9",
      stock: 20,
      caracteristicas: ["Pantalla Always-On", "Monitoreo cardíaco", "GPS integrado", "Resistente al agua"]
    }
  ];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
} 