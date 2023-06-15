import { Component } from '@angular/core';

const DATOS_STORAGE_KEY = 'datosGuardados';

@Component({
  selector: 'app-listareservas',
  templateUrl: './listareservas.component.html',
  styleUrls: ['./listareservas.component.css']

})
export class ListareservasComponent {
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
    const datos = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      fecha: this.fecha,
      hora: this.hora,
    };

    // Validar si los datos ya existen en el historial
    if (this.validarDatosRepetidos()) {
      alert("Ya hay reservaciones a esta hora");
      return;
    }else{
      alert("Reserva exitosa");
    // Guardar los datos en localStorage
    const datosGuardados = localStorage.getItem(DATOS_STORAGE_KEY);
    if (datosGuardados) {
      const historial = JSON.parse(datosGuardados);
      historial.push(datos);
      localStorage.setItem(DATOS_STORAGE_KEY, JSON.stringify(historial));
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
