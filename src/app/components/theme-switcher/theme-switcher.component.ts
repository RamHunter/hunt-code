import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ThemeService, type Theme } from "../../core/service/theme.service"

@Component({
  selector: "app-theme-switcher",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
})
export class ThemeSwitcherComponent {
  private themeService = inject(ThemeService)

  themes: { value: Theme; label: string; icon: string }[] = [
    { value: "light", label: "Light", icon: "sun" },
    { value: "dark", label: "Dark", icon: "moon" },
    { value: "blue", label: "Blue", icon: "droplet" },
    { value: "green", label: "Green", icon: "tree" },
    { value: "purple", label: "Purple", icon: "brush" },
  ]

  currentTheme = this.themeService.currentThemeSignal

  changeTheme(theme: Theme): void {
    this.themeService.setTheme(theme)
  }

  // Helper methods to simplify template bindings
  getCurrentThemeIcon(): string {
    const theme = this.themes.find((t) => t.value === this.currentTheme())
    return theme ? `bi-${theme.icon}` : "bi-circle"
  }

  getCurrentThemeLabel(): string {
    const theme = this.themes.find((t) => t.value === this.currentTheme())
    return theme ? theme.label : "Default"
  }

  getThemeIcon(theme: { icon: string }): string {
    return `bi-${theme.icon}`
  }
}

