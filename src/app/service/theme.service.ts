import { Injectable, signal, PLATFORM_ID, Inject } from "@angular/core"
import { isPlatformBrowser } from "@angular/common"
import { BehaviorSubject } from "rxjs"

export type Theme = "light" | "dark" | "blue" | "green" | "purple"

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly THEME_KEY = "selected-theme"
  private readonly themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme())

  currentTheme = this.themeSubject.asObservable()
  currentThemeSignal = signal<Theme>(this.getInitialTheme())
  private isBrowser: boolean

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    // Apply the initial theme only in browser context
    if (this.isBrowser) {
      this.applyTheme(this.getInitialTheme());
    }
  }

  setTheme(theme: Theme): void {
    if (this.isBrowser) {
      localStorage.setItem(this.THEME_KEY, theme)
      this.applyTheme(theme)
    }

    // These updates are safe in both browser and server contexts
    this.themeSubject.next(theme)
    this.currentThemeSignal.set(theme)
  }

  private getInitialTheme(): Theme {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme
      return savedTheme || "light"
    }
    return "light" // Default for server-side rendering
  }

  private applyTheme(theme: Theme): void {
    if (!this.isBrowser) return

    // Remove any previous theme classes
    document.body.classList.remove("theme-light", "theme-dark", "theme-blue", "theme-green", "theme-purple")

    // Add the new theme class
    document.body.classList.add(`theme-${theme}`)

    // Update data-bs-theme for Bootstrap 5.3+ dark mode support
    document.documentElement.setAttribute("data-bs-theme", theme === "dark" ? "dark" : "light")
  }
}

