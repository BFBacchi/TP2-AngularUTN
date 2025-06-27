import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentTheme: Theme = 'light';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      console.log('Tema actual en componente:', theme);
      this.currentTheme = theme;
    });
  }

  toggleTheme(): void {
    console.log('Botón de tema clickeado, tema actual:', this.currentTheme);
    this.themeService.toggleTheme();
  }
}
