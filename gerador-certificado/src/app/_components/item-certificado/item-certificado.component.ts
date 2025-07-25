import { Component, ɵconvertToBitFlags } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css',
})
export class ItemCertificadoComponent {
  id: string = '';

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', this.id]);
  }
}
