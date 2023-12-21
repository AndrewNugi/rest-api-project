import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() switchTheme = new EventEmitter();

  toggleTheme(): void {
    this.switchTheme.emit();

  }

}
