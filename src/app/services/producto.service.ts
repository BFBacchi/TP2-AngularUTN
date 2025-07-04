import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FiltrosProductos {
  categoria?: string;
  ordenarPor?: 'precio-asc' | 'precio-desc' | 'nombre-asc' | 'nombre-desc';
  precioMin?: number;
  precioMax?: number;
}

export interface Paginacion {
  pagina: number;
  elementosPorPagina: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://fakestoreapi.com';
  private productosCache: Producto[] = [];
  private categoriasCache: string[] = [];

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/products`);
  }

  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/products/${id}`);
  }

  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/products/category/${categoria}`);
  }

  getCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
  }

  // Método para obtener productos con filtros y paginación
  getProductosFiltrados(filtros: FiltrosProductos, paginacion: Paginacion): Observable<{productos: Producto[], paginacion: Paginacion}> {
    return this.getProductos().pipe(
      map(productos => {
        let productosFiltrados = [...productos];

        // Aplicar filtros
        if (filtros.categoria && filtros.categoria !== 'todas') {
          productosFiltrados = productosFiltrados.filter(p => 
            p.category.toLowerCase() === filtros.categoria!.toLowerCase()
          );
        }

        if (filtros.precioMin !== undefined) {
          productosFiltrados = productosFiltrados.filter(p => p.price >= filtros.precioMin!);
        }

        if (filtros.precioMax !== undefined) {
          productosFiltrados = productosFiltrados.filter(p => p.price <= filtros.precioMax!);
        }

        // Aplicar ordenamiento
        if (filtros.ordenarPor) {
          switch (filtros.ordenarPor) {
            case 'precio-asc':
              productosFiltrados.sort((a, b) => a.price - b.price);
              break;
            case 'precio-desc':
              productosFiltrados.sort((a, b) => b.price - a.price);
              break;
            case 'nombre-asc':
              productosFiltrados.sort((a, b) => a.title.localeCompare(b.title));
              break;
            case 'nombre-desc':
              productosFiltrados.sort((a, b) => b.title.localeCompare(a.title));
              break;
          }
        }

        // Aplicar paginación
        const total = productosFiltrados.length;
        const inicio = (paginacion.pagina - 1) * paginacion.elementosPorPagina;
        const fin = inicio + paginacion.elementosPorPagina;
        const productosPaginados = productosFiltrados.slice(inicio, fin);

        return {
          productos: productosPaginados,
          paginacion: {
            ...paginacion,
            total
          }
        };
      })
    );
  }

  // Método para obtener productos con cache
  getProductosConCache(): Observable<Producto[]> {
    if (this.productosCache.length > 0) {
      return new Observable(observer => {
        observer.next(this.productosCache);
        observer.complete();
      });
    }

    return this.getProductos().pipe(
      map(productos => {
        this.productosCache = productos;
        return productos;
      })
    );
  }

  // Método para obtener categorías con cache
  getCategoriasConCache(): Observable<string[]> {
    if (this.categoriasCache.length > 0) {
      return new Observable(observer => {
        observer.next(this.categoriasCache);
        observer.complete();
      });
    }

    return this.getCategorias().pipe(
      map(categorias => {
        this.categoriasCache = categorias;
        return categorias;
      })
    );
  }
} 