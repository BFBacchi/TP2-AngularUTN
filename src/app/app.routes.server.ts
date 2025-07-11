import { RenderMode, ServerRoute } from '@angular/ssr';
import fetch from 'node-fetch';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'detalle/:id',
    renderMode: RenderMode.Prerender,
    // Esta función obtiene todos los IDs de productos desde la FakeStore API
    getPrerenderParams: async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const productos = await res.json() as Array<{ id: number }>;
      return productos.map((p) => ({ id: p.id.toString() }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
