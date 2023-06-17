import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  menuOpen = false;
  showButtons = false;

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  doSomething() {
    // Aquí puedes agregar la lógica que deseas realizar al hacer clic en los elementos del menú
  }
}
