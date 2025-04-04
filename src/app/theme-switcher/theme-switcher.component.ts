import { Component, inject } from '@angular/core';
import { ThemeService, Theme } from '../service/theme.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule, FormsModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  private themeService = inject(ThemeService);

  themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: 'sun' },
    { value: 'dark', label: 'Dark', icon: 'moon' },
    { value: 'blue', label: 'Blue', icon: 'droplet' },
    { value: 'green', label: 'Green', icon: 'leaf' },
    { value: 'purple', label: 'Purple', icon: 'palette' }
  ];

  currentTheme = this.themeService.currentThemeSignal;

  get currentThemeIcon(): string {
    return 'bi-' + (this.themes.find(t => t.value === this.currentTheme())?.icon || 'sun');
  }
  
  get currentThemeLabel(): string {
    return 'bi-' + (this.themes.find(t => t.value === this.currentTheme())?.label || 'light');
  }

  changeTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
