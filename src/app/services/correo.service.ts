import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  constructor(private http: HttpClient) { }

  enviarCorreo(datos: any) {
    return this.http.post<any>('http://localhost:3000/reservas', datos);
  }
  
}
