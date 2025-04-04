import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark' | 'blue' | 'green' | 'purple';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'selected-theme';
  private readonly themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme());
  
  currentTheme = this.themeSubject.asObservable();
  currentThemeSignal = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply the initial theme
    this.applyTheme(this.getInitialTheme());
  }

  setTheme(theme: Theme): void {
    localStorage.setItem(this.THEME_KEY, theme);
    this.themeSubject.next(theme);
    this.currentThemeSignal.set(theme);
    this.applyTheme(theme);
  }

  private getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    return savedTheme || 'light';
  }

  private applyTheme(theme: Theme): void {
    // Remove any previous theme classes
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-blue', 'theme-green', 'theme-purple');
    
    // Add the new theme class
    document.body.classList.add(`theme-${theme}`);
    
    // Update data-bs-theme for Bootstrap 5.3+ dark mode support
    document.documentElement.setAttribute('data-bs-theme', theme === 'dark' ? 'dark' : 'light');
  }
}
