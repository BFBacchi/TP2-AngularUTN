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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.producto = this.productoService.getProductoById(Number(this.productId));
        if (!this.producto) {
          // Si no se encuentra el producto, redirigir al catálogo
          this.router.navigate(['/catalogo']);
        }
      }
    });
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }
}
