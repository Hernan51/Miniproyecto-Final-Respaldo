import { Component,OnInit } from '@angular/core';
import { CorreoService } from '../correo.service';
import {  ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import 'firebase/firestore';




const DATOS_STORAGE_KEY = 'datosGuardados';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})

export class ReservasComponent implements OnInit {

  constructor(private toastr: ToastrService, private firestore: AngularFirestore, private correoService: CorreoService) {}


  title: 'miniproyecto2' | undefined;
  nombre: any;
  telefono: any;
  email: any;
  fecha: any;
  hora: any;
  datos: any;
  historial: any;
  date: string | undefined;
  time: string | undefined;
  isValid = false;

  ngOnInit() {
    // Cargar datos guardados del localStorage al iniciar el componente
    const datosGuardados = localStorage.getItem(DATOS_STORAGE_KEY);
    if (datosGuardados) {
      this.historial = JSON.parse(datosGuardados);
    }
  }

  guardarDatos() {
    const fechaHora = this.fecha + ' ' + this.hora;
    // Validate if the selected date has already passed
  const currentDate = new Date();
  const selectedDate = new Date(this.fecha);
  if (selectedDate < currentDate) {
    Swal.fire('La fecha seleccionada ya ha pasado');
    return;
  }
    const datos = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      fecha: this.fecha,
      hora: this.hora,
    };


    // Validar si los datos ya existen en el historial
    if (this.validarDatosRepetidos()) {
      Swal.fire('Ya hay reservacion a esa hora')
      return;
    }else{
      Swal.fire('Reservación Confirmada');
      this.enviarCorreo();
    // Guardar los datos en localStorage
    const datosGuardados = localStorage.getItem(DATOS_STORAGE_KEY);
    if (datosGuardados) {
      const historial = JSON.parse(datosGuardados);
      historial.push(datos);
      localStorage.setItem(DATOS_STORAGE_KEY, JSON.stringify(historial));
      this.firestore.collection('reservaciones').add(datos)
      .then(() => {
        console.log('Datos guardados en Firestore');
        // Puedes realizar alguna acción adicional después de guardar los datos


        })



      .catch((error: any) => {
        console.error('Error al guardar los datos:', error);
      });
    } else {
      localStorage.setItem(DATOS_STORAGE_KEY, JSON.stringify([datos]));
    }

    // Limpiar los campos del formulario
    this.nombre = '';
    this.telefono = '';
    this.email = '';
    this.fecha = '';
    this.hora = '';
  }

}
enviarCorreo() {
  const datos = {
    nombre: this.nombre,
    telefono: this.telefono,
    email: this.email,
    fecha: this.fecha,
    hora: this.hora
  };

  this.correoService.enviarCorreo(datos).subscribe(
    (response) => {
      console.log(response); // Maneja la respuesta del servidor aquí
    },
    (error) => {
      console.error(error); // Maneja el error aquí
    }
  );

  this.nombre = '';
  this.telefono = '';
  this.email = '';
  this.fecha = '';
  this.hora = '';
}



  validarDatosRepetidos() {
    const fechaHora = this.fecha + ' ' + this.hora;

    if (!this.historial || !this.historial.length) {
      return false;
    }

    const existeDatoRepetido = this.historial.some((dato: any) => {
      const datoFechaHora = dato.fecha + ' ' + dato.hora;
      return fechaHora === datoFechaHora;
    });

    return existeDatoRepetido;
  }
}
