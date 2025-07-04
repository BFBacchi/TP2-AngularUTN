import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/producto.service';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  producto: Producto | undefined;
  productId: string | null = null;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.cargarProducto(Number(this.productId));
      }
    });
  }

  cargarProducto(id: number): void {
    this.loading = true;
    this.error = false;

    this.productoService.getProductoById(id).subscribe({
      next: (producto) => {
        this.producto = producto;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar producto:', error);
        this.error = true;
        this.loading = false;
        // Si no se encuentra el producto, redirigir al catálogo
        this.router.navigate(['/catalogo']);
      }
    });
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }

  // Función para convertir string a number
  toNumber(value: string | null): number {
    return value ? Number(value) : 0;
  }
}
