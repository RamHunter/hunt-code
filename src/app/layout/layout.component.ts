import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../service/theme.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [FormsModule, CommonModule],
  standalone:true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  themeSwitcherVisible = false
  activeTab = "styles"

  // Color options
  menuColors = [
    { id: "menu-white", value: "#ffffff" },
    { id: "menu-black", value: "#000000" },
    { id: "menu-blue", value: "#4e54ff" },
    { id: "menu-purple", value: "#8c54ff" },
    { id: "menu-transparent", value: "transparent" },
  ]

  headerColors = [
    { id: "header-white", value: "#ffffff" },
    { id: "header-black", value: "#000000" },
    { id: "header-blue", value: "#4e54ff" },
    { id: "header-purple", value: "#8c54ff" },
    { id: "header-transparent", value: "transparent" },
  ]

  primaryColors = [
    { id: "primary-purple", value: "#8c54ff" },
    { id: "primary-blue", value: "#4e54ff" },
    { id: "primary-lightblue", value: "#4e9fff" },
    { id: "primary-teal", value: "#00b8a9" },
    { id: "primary-olive", value: "#a4b82e" },
    { id: "primary-custom", value: "#cccccc" },
  ]

  backgroundColors = [
    { id: "bg-navy", value: "#0a1b48" },
    { id: "bg-purple", value: "#2e1065" },
    { id: "bg-teal", value: "#134e4a" },
    { id: "bg-green", value: "#14532d" },
    { id: "bg-olive", value: "#3f4708" },
    { id: "bg-custom", value: "#cccccc" },
  ]

  backgroundImages = [
    { id: "bg-img-1", url: "../../../media/bg-img1.jpg" },
    { id: "bg-img-2", url: "../../../media/bg-img2.jpg" },
    { id: "bg-img-3", url: "../../../media/bg-img3.jpg" },
    { id: "bg-img-4", url: "../../../media/bg-img4.jpg" },
    { id: "bg-img-5", url: "../../../media/bg-img5.jpg" },
  ]

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
    // Load saved theme if available
    this.themeService.loadSavedTheme()
  }

  toggleSidebar() {
    this.themeService.toggleSidebar()
  }

  toggleThemeSwitcher() {
    this.themeSwitcherVisible = !this.themeSwitcherVisible
  }

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }
}

