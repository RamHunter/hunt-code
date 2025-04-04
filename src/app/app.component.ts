import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { CommonModule } from '@angular/common';
import { FontSizeSwitcherComponent } from './font-size/font-size-switcher/font-size-switcher.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ThemeSwitcherComponent, FontSizeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hunt-code';

}
