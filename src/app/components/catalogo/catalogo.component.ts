import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService, Producto, FiltrosProductos, Paginacion } from '../../services/producto.service';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-catalogo',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
  categorias: string[] = [];
  loading = true;
  error = false;
  currentTheme: Theme = 'light';

  // Filtros
  filtros: FiltrosProductos = {
    categoria: 'todas',
    ordenarPor: 'precio-asc',
    precioMin: undefined,
    precioMax: undefined
  };

  // Paginación
  paginacion: Paginacion = {
    pagina: 1,
    elementosPorPagina: 12,
    total: 0
  };

  // Opciones de ordenamiento
  opcionesOrdenamiento = [
    { valor: 'precio-asc', texto: 'Precio: Menor a Mayor' },
    { valor: 'precio-desc', texto: 'Precio: Mayor a Menor' },
    { valor: 'nombre-asc', texto: 'Nombre A-Z' },
    { valor: 'nombre-desc', texto: 'Nombre Z-A' }
  ];

  constructor(
    private productoService: ProductoService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarProductos();
    
    // Suscribirse al tema
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  cargarCategorias(): void {
    this.productoService.getCategoriasConCache().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      }
    });
  }

  cargarProductos(): void {
    this.loading = true;
    this.error = false;
    
    this.productoService.getProductosFiltrados(this.filtros, this.paginacion).subscribe({
      next: (resultado) => {
        this.productos = resultado.productos;
        this.paginacion = resultado.paginacion;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.error = true;
        this.loading = false;
      }
    });
  }

  aplicarFiltros(): void {
    this.paginacion.pagina = 1; // Resetear a la primera página
    this.cargarProductos();
  }

  limpiarFiltros(): void {
    this.filtros = {
      categoria: 'todas',
      ordenarPor: 'precio-asc',
      precioMin: undefined,
      precioMax: undefined
    };
    this.paginacion.pagina = 1;
    this.cargarProductos();
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.obtenerTotalPaginas()) {
      this.paginacion.pagina = pagina;
      this.cargarProductos();
    }
  }

  obtenerTotalPaginas(): number {
    return Math.ceil(this.paginacion.total / this.paginacion.elementosPorPagina);
  }

  obtenerRangoPaginas(): number[] {
    const totalPaginas = this.obtenerTotalPaginas();
    const paginaActual = this.paginacion.pagina;
    const rango = 2; // Número de páginas a mostrar antes y después de la actual

    let inicio = Math.max(1, paginaActual - rango);
    let fin = Math.min(totalPaginas, paginaActual + rango);

    // Ajustar el rango si estamos cerca de los extremos
    if (inicio === 1) {
      fin = Math.min(totalPaginas, inicio + rango * 2);
    }
    if (fin === totalPaginas) {
      inicio = Math.max(1, fin - rango * 2);
    }

    const paginas: number[] = [];
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  // Métodos para manejar cambios en los filtros
  onCategoriaChange(): void {
    this.aplicarFiltros();
  }

  onOrdenamientoChange(): void {
    this.aplicarFiltros();
  }

  onPrecioMinChange(): void {
    this.aplicarFiltros();
  }

  onPrecioMaxChange(): void {
    this.aplicarFiltros();
  }
}
