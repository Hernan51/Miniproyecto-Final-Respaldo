
import { Component } from '@angular/core';



@Component({
  selector: 'app-lectura-voz',
  templateUrl: './lectura-voz.component.html',
  styleUrls: ['./lectura-voz.component.css']
})
export class LecturaVozComponent {

  speechUtterance: any;
  isSpeaking: boolean;
  menuOpen = false;
  showButtons = false;
  isReading=true;


//ENLACE REALCE
  realzarEnlaces(color: string) {
    const enlaces = document.querySelectorAll('a');
    enlaces.forEach((enlace) => {
      enlace.classList.add('realzado');

      enlace.style.backgroundColor= color;
    });
  }

  restaurarEnlaces() {
    const enlaces = document.querySelectorAll('a');
    enlaces.forEach((enlace) => {
      enlace.classList.remove('realzado');
      enlace.style.backgroundColor = '';
    });
  }





//CONTRASTE
  cambiarContraste(contraste: string) {
    switch (contraste) {
      case 'normal':
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.filter = '';
      break;
      case 'oscuro':
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'yellow';
        break;
      case 'luz':
       document.body.style.backgroundColor = 'white';
       document.body.style.color = 'blue';

        break;
      case 'invertido':
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        document.body.style.filter = 'invert(80%)';
        break;
        case 'byn':
          document.body.style.filter ='grayscale(100%)';
          break;
      default:
        break;
    }
  }

  //TAMAÑO
  cambiarTam(tamaño: string) {
    switch (tamaño) {
      case 'pequeño':
        document.body.style.fontSize = '10px';
        break;
      case 'mediano':
        document.body.style.fontSize = '20px';
        break;
      case 'grande':
        document.body.style.fontSize = '30px';
        break;
      default:
        break;
    }
  }



  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  doSomething() {
    // Aquí puedes agregar la lógica que deseas realizar al hacer clic en los elementos del menú
  }

  constructor() {
    this.speechUtterance = new SpeechSynthesisUtterance();
    this.isSpeaking = false;
  }


  //LECTOR DE PANTALLA
  startSpeaking() {
    this.isSpeaking = true;

    const elements = document.querySelectorAll('p, h1, img, a, h3, label, h5');
    let fullText = '';

    elements.forEach((element) => {
      if (element.tagName === 'IMG') {
        const altText = element.getAttribute('alt');
        if (altText) {
          fullText += altText + ' ';
        }
      } else {
        fullText += element.textContent + ' ';
      }
    });

    if (fullText) {
      this.speechUtterance.text = fullText;
      speechSynthesis.speak(this.speechUtterance);
    }
  }
//pausa
  pauseSpeaking() {
    if (this.isReading) {
      // Pausar la lectura de voz
      speechSynthesis.pause();
      this.isReading = false;
    } else {
      // Reanudar la lectura de voz
      speechSynthesis.resume();
      this.isReading = true;
    }
  }

  stopSpeaking() {
    this.isSpeaking = false;
    speechSynthesis.cancel();
  }





}
