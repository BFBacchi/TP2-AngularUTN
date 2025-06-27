import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');
  public theme$ = this.themeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Implementar la lógica de la documentación de Tailwind v4
      const htmlElement = document.documentElement;
      
      // Verificar si hay un tema guardado en localStorage
      const savedTheme = localStorage.getItem('theme') as Theme;
      
      if (savedTheme) {
        console.log('Tema guardado encontrado:', savedTheme);
        this.setTheme(savedTheme);
      } else {
        // Si no hay tema guardado, usar la preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const systemTheme = prefersDark ? 'dark' : 'light';
        console.log('Preferencia del sistema:', systemTheme);
        
        // Aplicar la lógica de la documentación
        htmlElement.classList.toggle(
          'dark',
          !('theme' in localStorage) && prefersDark
        );
        
        this.themeSubject.next(systemTheme);
      }
    }
  }

  getCurrentTheme(): Theme {
    return this.themeSubject.value;
  }

  setTheme(theme: Theme): void {
    console.log('Cambiando tema a:', theme);
    this.themeSubject.next(theme);
    
    // Solo guardar en localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.documentElement;
      
      if (theme === 'dark') {
        localStorage.setItem('theme', 'dark');
        htmlElement.classList.add('dark');
        console.log('Clase dark agregada al HTML');
      } else {
        localStorage.setItem('theme', 'light');
        htmlElement.classList.remove('dark');
        console.log('Clase dark removida del HTML');
      }
      
      // Verificar que la clase se aplicó correctamente
      console.log('Clases del HTML después del cambio:', htmlElement.className);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Cambiando de', currentTheme, 'a', newTheme);
    this.setTheme(newTheme);
  }

  // Método para respetar la preferencia del sistema
  useSystemTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const htmlElement = document.documentElement;
      
      htmlElement.classList.toggle('dark', prefersDark);
      this.themeSubject.next(prefersDark ? 'dark' : 'light');
    }
  }
} 