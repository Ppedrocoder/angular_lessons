import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, FloatLabelModule, InputTextModule, ButtonModule, CardModule],
  template: ` <main class="text-center m-auto">
    <h1 class="text-center"> {{title()}} </h1>
    
    <div class="card flex flex-wrap justify-center items-end gap-4 mt-4">
            
            <p-floatlabel variant="on">
                <input pInputText id="on_label" [(ngModel)]="name" autocomplete="off" />
                <label for="on_label">Nome da Lenda</label>
            </p-floatlabel>
        </div>
    <div class="card flex flex-wrap justify-center items-end gap-4 mt-4">
            
            <p-floatlabel variant="on">
                <input pInputText id="on_labell" [(ngModel)]="texto" autocomplete="off" />
                <label for="on_labell">Texto da Lenda</label>
            </p-floatlabel>
        </div>
    <div class="card flex justify-center mt-4">
            <p-button label="Clica aí" (onClick)="handleclick()" />
    </div>
    

    <div class="mb-4 p-8 flex items-center justify-center">
            <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
                <ng-template #header>
                    <img alt="Card" class="w-full" src="https://primefaces.org/cdn/primeng/images/card-ng.jpg" />
                </ng-template>
                <ng-template #title> {{name}} </ng-template>
                <ng-template #subtitle> Notícias do dia </ng-template>
                <p>
                    {{texto}}
                </p>
                <ng-template #footer>
                    <div class="flex gap-4 mt-1">
                        <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
                        <p-button label="Save" class="w-full" styleClass="w-full" />
                    </div>
                </ng-template>
            </p-card>
        </div>
    <router-outlet></router-outlet>
  </main>`,
  styleUrl: './app.css'
})
export class App {
  isButtonDisabled = false;
  protected readonly title = signal('O Guardiorla vem aí');
  name = "Pedro";
  texto = "texto da lenda";
  handleclick() {
    window.alert("Vasco é o maior que já existiu")
  }
}
