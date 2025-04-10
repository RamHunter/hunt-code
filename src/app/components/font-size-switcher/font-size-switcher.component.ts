import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FontSizeService, type FontSize } from "../../core/service/font-size.service"

@Component({
  selector: "app-font-size-switcher",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./font-size-switcher.component.html",
  styleUrls: ["./font-size-switcher.component.scss"],
})
export class FontSizeSwitcherComponent {
  private fontSizeService = inject(FontSizeService)

  fontSizes: { value: FontSize; label: string; icon: string }[] = [
    { value: "small", label: "Small", icon: "type" },
    { value: "medium", label: "Medium", icon: "type" },
    { value: "large", label: "Large", icon: "type-h2" },
    { value: "x-large", label: "Extra Large", icon: "type-h1" },
  ]

  currentFontSize = this.fontSizeService.currentFontSizeSignal

  changeFontSize(fontSize: FontSize): void {
    this.fontSizeService.setFontSize(fontSize)
  }

  // Helper methods to simplify template bindings
  getCurrentFontSizeIcon(): string {
    const fontSize = this.fontSizes.find((f) => f.value === this.currentFontSize())
    return fontSize ? `bi-${fontSize.icon}` : "bi-type"
  }

  getCurrentFontSizeLabel(): string {
    const fontSize = this.fontSizes.find((f) => f.value === this.currentFontSize())
    return fontSize ? fontSize.label : "Medium"
  }

  getFontSizeIcon(fontSize: { icon: string }): string {
    return `bi-${fontSize.icon}`
  }
}

