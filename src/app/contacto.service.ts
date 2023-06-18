import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  enviarCorreo(comentario: string) {
    return this.http.post<any>('http://localhost:3000/enviar-correo', { comentario });
  }
}
