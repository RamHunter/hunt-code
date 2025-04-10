import { Injectable, signal, PLATFORM_ID, Inject } from "@angular/core"
import { isPlatformBrowser } from "@angular/common"

export type FontSize = "small" | "medium" | "large" | "x-large"

@Injectable({
  providedIn: "root",
})
export class FontSizeService {
  private readonly FONT_SIZE_KEY = "selected-font-size"
  currentFontSizeSignal = signal<FontSize>(this.getInitialFontSize())
  private isBrowser: boolean

  // Font size values in pixels or relative units
  fontSizeValues: Record<FontSize, string> = {
    small: "0.875rem", // 14px
    medium: "1rem", // 16px (default)
    large: "1.125rem", // 18px
    "x-large": "1.25rem", // 20px
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    if (this.isBrowser) {
      this.applyFontSize(this.getInitialFontSize());
    }
  }

  setFontSize(fontSize: FontSize): void {
    this.currentFontSizeSignal.set(fontSize)

    if (this.isBrowser) {
      localStorage.setItem(this.FONT_SIZE_KEY, fontSize)
      this.applyFontSize(fontSize)
    }
  }

  private getInitialFontSize(): FontSize {
    if (this.isBrowser) {
      const savedFontSize = localStorage.getItem(this.FONT_SIZE_KEY) as FontSize
      return savedFontSize || "medium"
    }
    return "medium" // Default for server-side rendering
  }

  private applyFontSize(fontSize: FontSize): void {
    if (!this.isBrowser) return

    // Remove any previous font size classes
    document.documentElement.classList.remove("font-small", "font-medium", "font-large", "font-x-large")

    // Add the new font size class
    document.documentElement.classList.add(`font-${fontSize}`)

    // Set the CSS variable for font size
    document.documentElement.style.setProperty("--base-font-size", this.fontSizeValues[fontSize])
  }
}

