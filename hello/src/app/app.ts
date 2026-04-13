import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonMod } ;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  template: ` <main>
    <h1 class="text-center"> {{title()}} </h1>
    <input [(ngModel)] = "name"/>
    <p> Hello {{name}} </p>
    <button [disabled] = "isButtonDisabled" (click) = "handleclick()"> Click Here </button>

    <router-outlet></router-outlet>
  </main>`,
  styleUrl: './app.css'
})
export class App {
  isButtonDisabled = true;
  protected readonly title = signal('O Guardiorla vem aí');
  name = "Pedro";
  handleclick() {
    window.alert("Vasco é o maior que já existiu")
  }
}
