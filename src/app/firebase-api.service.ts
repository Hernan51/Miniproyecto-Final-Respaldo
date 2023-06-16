import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirestoreApiService {
  private apiUrl = 'http://localhost:3000/api/data'; // Reemplaza con la URL de tu API

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  getFirestoreData(collection: string) {
    return this.firestore.collection(collection).valueChanges();
  }

  sendDataToApi(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
