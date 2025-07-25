# Angular - RocketSeat

**Projeto desenvolvido em conjunto com o professor durante o curso da RocketSeat. Não é de minha autoria individual.**

## Gerador de Certificados

Aplicação Angular para geração e gerenciamento de certificados digitais.

### Funcionalidades

- Criação de certificados personalizados
- Listagem de certificados criados
- Visualização individual de certificados
- Armazenamento local dos dados
- Interface responsiva com Bootstrap
- Geração de imagem do certificado (html2canvas)

### Tecnologias Utilizadas

- **Angular 17.3**
- **Bootstrap 5.3**
- **html2canvas** - Para captura de tela do certificado
- **UUID** - Para geração de IDs únicos
- **TypeScript**

### Como Executar

```bash
cd gerador-certificado
npm install
npm start
```

Acesse: `http://localhost:4200`

### Estrutura do Projeto

- `pages/` - Páginas principais (lista, formulário, visualização)
- `_components/` - Componentes reutilizáveis (botões, navbar, etc.)
- `_services/` - Serviços para gerenciamento de dados
- `interfaces/` - Tipagens TypeScript
- `assets/` - Recursos visuais (imagens do certificado)

## Anotações do Curso

### Comandos Básicos

**Criar projeto:**
```bash
ng new gerador-certificado
```

**Criar componente:**
```bash
ng generate component <nome-componente>
# ou
ng g c <nome-componente>
# Ignorar arquivos de teste:
ng g c <nome-componente> --skip-tests
```

**Executar projeto:**
```bash
ng serve
```

**Gerar serviço:**
```bash
ng g s certificado
```

### Estrutura de Arquivos

- **src/** - Pasta principal
- **app/** - Todos os recursos da aplicação
- **app.config** - Configura os provedores
- **app.routes.ts** - Configuração de todas as rotas da aplicação
- **index.html** - Porta de entrada de toda a renderização
- **main.ts** - Especifica o componente de entrada da aplicação
- **styles.css** - Arquivo de estilização global
- **.editorconfig** - Configura a identação do projeto
- **angular.json** - Toda a configuração do projeto

### Conceitos Importantes

#### Ciclo de Vida dos Componentes
- **constructor** - Chamado assim que o componente é instanciado
- **ngOnInit** - Inicializado depois que o Angular inicializa o componente e o DOM

#### Diretivas Estruturais

**ngIf:**
```html
<p *ngIf="usuarioLogado; else naoLogado">Bem-vindo!</p>
<ng-template #naoLogado><p>Por favor, faça login.</p></ng-template>
```

**ngFor:**
```html
<li *ngFor="let item of lista; let i = index">
  {{ i }} - {{ item }}
</li>
```

**@for (Angular 17+):**
```html
@for (item of items; track item.id) {
  <div>{{ item.nome }}</div>
}
```

#### Comunicação entre Componentes

**@Input - Componente filho:**
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Nome recebido: {{ nome }}</p>`
})
export class ChildComponent {
  @Input() nome: string = '';
}
```

**Componente pai:**
```html
<app-child [nome]="'Chappel'"></app-child>
```

#### Roteamento

**Configuração de rotas (app.routes.ts):**
```typescript
import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';

export const routes: Routes = [
  {
    path: 'certificados',
    component: CertificadosComponent,
  },
  {
    path: 'certificados/:id',
    component: CertificadoFormComponent,
  },
];
```

**RouterLink:**
```html
<a [routerLink]="['/certificados', id]">Ir para certificado</a>
<a routerLink="/certificados" routerLinkActive="ativo">Certificados</a>
```

**Navegação via TypeScript:**
```typescript
constructor(private router: Router) {}

redirecionaCertificado() {
  this.router.navigate(['/certificados', this.id]);
  // ou
  this.router.navigateByUrl('/certificados');
}
```

#### Formulários

**NgModel (Two-way binding):**
```html
<input [(ngModel)]="nome" name="nome">
<p>Olá, {{ nome }}!</p>
```

**Template Reference Variable:**
```html
<form #form="ngForm" (ngSubmit)="enviarFormulario(form)">
  <input name="nome" ngModel required />
  <button type="submit">Enviar</button>
</form>
```

#### Estilização Dinâmica

**ngClass:**
```html
<div [ngClass]="{ 'ativo': estaAtivo, 'erro': temErro }">Status</div>
```

**ngStyle:**
```html
<div [ngStyle]="{ 'background-color': cor, 'font-size.px': tamanho }">
  Texto estilizado
</div>
```

#### ViewChild e Manipulação do DOM

```typescript
@ViewChild('certificadoContainer') certificadoElement!: ElementRef;

downloadCertificado() {
  html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(
    (canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `certificado_${this.certificado?.nome.replaceAll(' ', '_')}.png`;
      link.click();
    }
  );
}
```

### Deploy

**Build para produção:**
```bash
ng build --configuration=production
```

**Configuração Netlify (netlify.toml):**
```toml
[build]
command = "ng build --configuration=production"
publish = "dist/gerador-certificado"

[[redirect]]
from="/*"
to = "/index.html"
status = 200
```

---

*Projeto educacional desenvolvido durante o curso Angular da RocketSeat*
