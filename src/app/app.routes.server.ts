import { RenderMode, ServerRoute } from '@angular/ssr';
import fetch from 'node-fetch';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'detalle/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
