import { Component,OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { HttpClient } from '@angular/common/http';



const DATOS_STORAGE_KEY = 'datosGuardados';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})

export class ReservasComponent implements OnInit {

  constructor(private toastr: ToastrService,private firestore:AngularFirestore,private http: HttpClient) {}

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

enviarDatosAPI() {
  // Obtener los datos de Firebase
  this.firestore
    .collection('reservaciones')
    .valueChanges()
    .subscribe(
      (data: any) => {
        // Enviar los datos a la API
        this.http.post('http://localhost:3000/api/data', data).subscribe(
          () => {
            this.toastr.success('Datos enviados a la API');
          },
          (error: any) => {
            console.error('Error al enviar los datos a la API:', error);
            this.toastr.error('Error al enviar los datos a la API');
          }
        );
      },
      (error: any) => {
        console.error('Error al obtener los datos de Firebase:', error);
        this.toastr.error('Error al obtener los datos de Firebase');
      }
    );
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
