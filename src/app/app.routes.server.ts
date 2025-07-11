import { RenderMode, ServerRoute } from '@angular/ssr';
import fetch from 'node-fetch';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'detalle/:id',
    renderMode: RenderMode.Prerender,
    // Esta función obtiene todos los IDs de productos desde la FakeStore API
    getPrerenderParams: async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          console.error('Error al obtener productos:', res.status, res.statusText);
          return [];
        }
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Respuesta no es JSON:', await res.text());
          return [];
        }
        const productos = await res.json() as Array<{ id: number }>;
        return productos.map((p) => ({ id: p.id.toString() }));
      } catch (error) {
        console.error('Error en getPrerenderParams:', error);
        return [];
      }
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
