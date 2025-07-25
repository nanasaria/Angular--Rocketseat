/**
 Angular

 Comando para criar projeto
 ng new gerador-certificado

Pastas
src -> Pasta principal
app -> Todos os recursos da 
aplicação

app.config -> Configura os provedores
app.routes.ts -> Configuração de todas as rotas da aplicação
index.html -> Porta de entrada de toda a renderização da 
aplicação. É onde o Angular injeta os scripts gerados.
main.ts -> Onde especifica o componente de entrada da 
aplicação e por padrão é o app.component.
styles.css -> Arquivo de estilização global na aplicação.
.editorconfig -> Configura a identação de todo o projeto.
angular.json -> Toda a configuração do projeto.

Principais configurações do angular.json
projects -> Contém a configuração de todo o projeto
projectType -> Tipo do projeto e poderia ser outra coisa
como uma biblioteca.
root -> Define o diretório raiz do projeto.
sourceRoot -> Indica a pasta em que o código fonte está
prefix -> Utilizado nas tags, quando chama um componente.
Ex: <app nome-componente>

outputPath -> Onde ficará os arquivos de build
browser -> Arquivo de entrada da aplicação.
assets -> Onde definimos a lista de arquivos/diretórios
que incluiremos na build.
styles -> Onde passamos o caminho das estilizações.
scripts -> Definimos os arquivos JavaScript que iremos 
aplicar globalmente no projeto.
budgets -> Define quando mostrará avisos ao ultrapassar certo
tamanho. 
MaximuWarning -> Avisa para ter cuidado com o tamanho.
MaximumError -> Impede de gerar a build se ultrapassar o tamanho.

Criar componente no Angular
ng generate component <nome-componente>
Ou
ng g c <nome-componente>

Se quiser ignorar os arquivos de teste:
ng g c <nome-componente> --skip-tests

Todo código de Angular é em TypeScript.

Dentro de <nome-componente>.component.ts
É onde concentramos a lógica do componente.
Temos um decorador @component que coloca o prefixo app
e o nome do componente. Toda vez que precisamos referenciar
esse componente em algum lugar, utilizamos esse seletor.
imports [] é onde importamos todas as bibliotecas que 
utilizamos no componente.
templateUrl indica qual arquivo html faz parte do componente.
styleUrl referencia o arquivo css.

O componente é uma classe e concentra a lógica de programação
exclusivamente para o componente.

Executar projeto
Observação: Para executar um projeto, precisa estar na raiz.
comando: ng serve

Ciclos de vidas de um componente
ngOnInit -> Faz parte da interface OnInit e é chamado
automaticamente pelo Angular logo após a criação do componente
e a inicialização de suas propriedades vinculadas (inputs).

Para que serve?
Serve para executar lógica de inicialização do componente,
como: 
- Buscar dados de uma API
- Inicializar variáveis
- Configurar observables
- Acessar valores recebidos por @input()

if dentro do html
@if(){}

Esconder Componente:
<app-navbar [hidden]="<variavel>"></app-navbar>

ngIf
É uma diretiva estrutural do Angular usada para mostrar ou
esconder elementos do DOM com base em uma condição booleana.
Se a condição for verdadeira, o elemento é adicionado ao 
DOM e se for falso, o elemento é removido completamente do
DOM.

Observação: O Angular usa o asterisco (*) para indicar que 
é uma diretiva estrutural, ou seja, altera a estrutura do 
DOM. Podemos utilizar o else também.
Exemplo de uso do ngIf:
<p *ngIf="usuarioLogado; else naoLogado">Bem-vindo!</p>
<ng-template #naoLogado><p>Por favor, faça login.</p></ng-template>

Observação: Para utilizar o ngIf, é necessário importar o
CommonModule no app.component.ts

ngFor
Itera sobre uma coleção (como um array) e cria um elemento
do DOM para cada item dessa lista.
exemplo:
<li *ngFor="let item of lista">{{ item }}</li>

É possível obter o índice do item. Exemplo:
<li *ngFor="let fruta of lista; let i = index">
  {{ i }} - {{ fruta }}
</li>

Obter se é o primeiro ou o último item:
<li *ngFor="let fruta of lista; let first = first; let last = last">
  {{ fruta }} - Primeiro: {{ first }} / Último: {{ last }}
</li>

ngClass
Usada para adicionar ou remover classes CSS dinamicamente 
com base em uma condição ou expressão.

Você pode:
- Aplicar várias classes ao mesmo tempo
- Aplicar classes condicionalmente
- Alternar estilos de forma dinâmica sem escrever lógica no
HTML diretamente

Exemplo de sintaxes ngClass
Array de classes:
<div [ngClass]="['classe1', 'classe2']">Texto</div>

Objeto com condições:
<div [ngClass]="{ 'ativo': estaAtivo, 'erro': temErro }">Status</div>

Usando string diretamente:
<div [ngClass]="classeSelecionada">Texto</div>

Com eventos:
<button (click)="ativo = !ativo" [ngClass]="{ 'ligado': ativo, 'desligado': !ativo }">
  Toggle
</button>

Recurso de Input
O recurso de input se refere ao decorador @input, que é 
usado para passar dados de um componente pai para um 
componente filho.

Exemplo:
Componente filho:
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Nome recebido: {{ nome }}</p>`
})
export class ChildComponent {
  @Input() nome: string = '';
}

Componente pai: 
<app-child [nome]="'Chappel'"></app-child>

Quando usar?
Para compartilhar dados entre componentes, especialmente 
quando um componente filho precisa exibir ou usar dados 
que vêm do pai.
Por exemplo, em componentes reutilizáveis como cards, botões 
customizados, modais etc.

ng-content
Usado para criar conteúdo projetado (content projection), ou
seja: permite que você insira conteúdo personalizado dentro
de um componente reutilizável.

Para que serve?
Imagine que você criou um componente de layout, como um 
cartão (card), e quer que ele possa exibir qualquer 
conteúdo dentro dele. Em vez de travar o conteúdo, você usa 
ng-content como espaço reservado.

Rotas no Angular
Rota -> Caminho para acessar determinada página.

Para configurarmos as rotas, acessamos o arquivo app.routes.ts.
Passamos uma lista de objetos para definir as rotas, da 
seguinte maneira:
import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';

export const routes: Routes = [
  {
    path: 'certificados',
    component: CertificadosComponent,
  },
];

E no app.component.html colocamos o <router-outlet>
Exemplo:
<app-base-ui>
  <router-outlet />
</app-base-ui>

Para passar parâmetros na rota:
{
  path: 'certificados/:id',
  component: CertificadoFormComponent,
}

RouterLink para Navegação entre as páginas
O RouterLink é uma diretiva usada para navegar entre rotas
definidas na aplicação sem recarregar a página (navegação SPA).

Sintaxe básica:
<a [routerLink]="['/caminho']">Ir para rota</a>

Ou de forma simples, se o caminho não é dinâmico:
<a routerLink="/caminho">Ir para rota</a>

O RouterLink não recarrega a página, navega pelas rotas e
usa o roteamento interno do Angular.

Para utilizar o routerLink, precisamos importar no arquivo
typescript:
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

Rota dinâmica
[routerLink]=""

Observação: Quando utilizamos um parâmetro com colchetes
estamos dizendo para interpretar o que passar como um 
código typescript. Ele também aceita uma lista.
No caso da rota, podemos passar uma lista e cada item da 
lista será interpretado como um pedaço da rota.

Ex: 
[routerLink]="['/certificados', id]"

Toda variável passada na rota, precisa ser declarada no
arquivo typescript. Ex:
export class ItemCertificadoComponent {
  id: string = '';
}

Também é possível acessar rotas via TypeScript.

RouterLinkActive
É uma diretiva que aplica automaticamente uma ou mais classes
CSS a um elemento quando a rota associada ao routerLink 
estiver sendo exibida.
Exemplo:
<a routerLink="/home" routerLinkActive="ativo">Início</a>

Observação: Precisamos importar o RouterModule no typescript.
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

routerLinkActiveOptions
É uma diretiva opcional no Angular usada em conjunto com
routerLinkActive para configurar como o Angular determina
se uma rota está ativa.

Por que usar routerLinkActiveOptions?
Por padrão, o routerLinkActive considera a rota como ativa 
mesmo se for apenas um prefixo da rota atual.
Ex: Se a rota atual for /home/detalhes, o link ainda será 
considerado ativo, porque /home é um início da URL.
Use exact: true para que o Angular só aplique a classe se a 
URL bater exatamente com a rota.
Ex:
<a 
  routerLink="/home" 
  routerLinkActive="ativo"
  [routerLinkActiveOptions]="{ exact: true }"
>
  Início
</a>


constructor x ngOnInit
constructor -> chamado assim que o componente é instanciado.
ngOnInit -> Inicializado depois que o Angular inicializa o
componente e o DOM.

Router para Navegação via TypeScript
Ex:
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
    -> Forma com navigate que é semelhante ao RouterLink
       com colchetes:
    this.router.navigate(['/certificados', this.id]);

    e no HTML passamos no componente e na maioria das tags
    HTML:
    (click)="redirecionaCertificado()"

    -> Forma de redirecionar semelhante ao RouterLink
       sem colchetes:

    this.router.navigateByUrl('/certificados');
  }
}

NgModel 
É uma diretiva do Angular usada para criar ligação bidirecional
de dados entre uma variável do componente e um elemento do
template, normalmente <input>, <select> ou <textarea>.

Exemplo:
<input [(ngModel)]="nome">
<p>Olá, {{ nome }}!</p>

Nesse exemplo, quando o usuário digita algo no input, o 
valor da variável nome no componente é atualizado 
automaticamente.

Observações:
- Para usar o ngModel, é necessário importar o FormsModule 
no typescript.
- Para utilizar o ngModel precisa utilizar a propriedade
name

import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [FormsModule]
})

Estrutura de repetição For no Angular
Sintaxe:
@for (item of items; track item.id) {
  <div>{{ item.nome }}</div>
}

Para utilizar o for, colocamos @for 
(item of items) funciona de forma semelhante ao for...of 
do JavaScript: percorre todos os itens do array e retorna o
valor.
track item.id -> Otimiza o rendering permitindo que o 
Angular identifique cada item de forma única
O bloco de código HTML a ser repetido deve ficar dentro 
das chaves {}.

Template reference variable
É uma forma de acessar um elemento DOM ou um componente
filho diretamente no HTML do template.

Exemplo:
<form #form="ngForm" (ngSubmit)="enviarFormulario(form)">
  <input name="nome" ngModel required />
  <button type="submit">Enviar</button>
</form>

#form → cria uma referência local chamada form.
="ngForm" → liga essa referência ao formulário Angular
Assim, form se torna um objeto do tipo NgForm, que você 
pode usar para:
- acessar os valores dos campos
- verificar se o formulário é válido
- verificar se o formulário foi modificado
- resetar o formulário

Observação: novalidate serve para "dizer" ao navegador para
não validar nosso formulário.

ngStyle
Diretiva utilizada para aplicar estilos CSS dinamicamente a
um elemento HTML, de forma parecida com o style no React ou
com a manipulação direta de style via JavaScript.

Sintaxe:
<div [ngStyle]="{ 'background-color': cor, 'font-size.px': tamanho }">
  Texto estilizado
</div>

É possível adicionar lógica condicional também:
<div [ngStyle]="estaAtivo ? { 'color': 'green' } : { 'color': 'gray' }">
  Status do item
</div>

Deixando botão dinâmico
Para deixar o botão dinâmico, primeiramente temos que 
declarar a variável no typescript e passar o @Input.
Exemplo:
@Input() textoBotao: string = '';

Precisamos importar o Input também:
import { Component, Input } from '@angular/core';

No HTML do componente passamos a variável:
<button class="custom-button">{{ textoBotao }}</button>

As páginas/componentes que recebem o componente dinâmico
declaram dessa forma:
<app-primary-button [textoBotao]="'Gerar certificado'"></app-primary-button>

Observação: Quando colocamos propriedades/variáveis entre
colchetes, estamos dizendo para o Angular considerar como
código JavaScript. Por isso, precisamos passar entre aspas
para que seja considerado uma string.

Também podemos passar da forma simples:
<app-secondary-button
  textoBotao="Adicionar"
  phClass="ph ph-plus"
  [ngStyle]="campoInvalido(atividadeRef) ? { 'margin-bottom': '24px' } : {}"
></app-secondary-button>

Serviço no Angular
Serviço é onde contém uma lógica que pode ser usada em 
vários locais da aplicação. Caso queira disponibilizar
uma informação em toda a aplicação, você pode utilizar
um serviço.

Comando para gerar serviços:
ng g s certificado

View Child
É um decorador usado para acessar elementos do template ou
componentes filhos diretamente no typescript.
Pra que serve?
Com o @ViewChild, você pode:
- Manipular elementos do DOM diretamente (como um <input>)
- Chamar métodos de componentes filhos
- Obter referência a diretivas ou componentes

 */
