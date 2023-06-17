import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';
import { telefonoValidator } from './telefono.validator';
import Swal from 'sweetalert2';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formulario: FormGroup;
  telefonoInvalido: boolean = false;
  loading: boolean = false;
  name: string = ''; // Agrega la propiedad name
  email: string = ''; // Agrega la propiedad email
  message: string = ''; // Agrega la propiedad message



  constructor(private formBuilder: FormBuilder, private contactoService: ContactoService) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, telefonoValidator()]],

      asunto: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  ngOnInit(): void { }
  mostrarErrorTelefono() {
    this.telefonoInvalido = (this.formulario.get('telefono')?.invalid ?? false) && (this.formulario.get('telefono')?.touched ?? false);
  }



  enviarCorreo(): void {
    const comentario = this.formulario.get('comentario')?.value;

    if (comentario) {
      this.loading = true;
      this.contactoService.enviarCorreo(comentario).subscribe(
        () => {
          console.log('Correo enviado correctamente');
          // Obtener el nombre de la persona desde el formulario
          const nombre = this.formulario.get('nombre')?.value;

          // Convertir el nombre a mayúsculas utilizando el pipe UpperCasePipe
          const nombreEnMayusculas = new UpperCasePipe().transform(nombre);

          // Construir el mensaje a mostrar en el Sweet Alert
          const mensaje = `Gracias por comunicarte con nosotros ${nombreEnMayusculas}`;

          // Mostrar el Sweet Alert con el mensaje
          Swal.fire('¡Envío exitoso!', mensaje, 'success');
          // Realiza cualquier otra acción necesaria después de enviar el correo
        },
        (error: any) => {
          console.log('Error al enviar el correo:', error);
          Swal.fire('¡ERROR!', 'El correo no se envio correctamente.', 'error');
          // Realiza acciones de manejo de errores si es necesario
        },
        () => {
          this.loading = false; // Establecer el estado de carga en false cuando la operación finaliza
        }
      );
    }
    
  }
  
}
