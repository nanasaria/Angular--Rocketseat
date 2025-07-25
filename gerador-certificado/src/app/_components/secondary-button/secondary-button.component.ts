import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css',
})
export class SecondaryButtonComponent {
  @Input() textoBotao: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
