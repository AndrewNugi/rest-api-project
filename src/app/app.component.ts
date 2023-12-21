import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class AppComponent implements OnInit{
  title = 'rest-api-countries2';
  theme: Theme = 'light-theme';


constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
  this.renderer.addClass(this.document.body, this.theme);
  }

  toggleTheme(): void {
    const newTheme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.document.body.classList.replace(this.theme, newTheme);
    this.theme = newTheme;
    //this.addThemeToLocalStorage(this.theme);
  }

  // addThemeToLocalStorage(theme: Theme): void {
  //   localStorage.setItem('theme', theme);
  // }

  // getThemeFromLocalStorage(): Theme {
  //   return localStorage.getItem('theme') as Theme;
     
  // }
}

type Theme = 'light-theme' | 'dark-theme';
