import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados
      ? JSON.parse(certificados)
      : [];
  }

  title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
