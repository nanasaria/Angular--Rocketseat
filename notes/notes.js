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


 */
