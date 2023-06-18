import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule } from '@coreui/angular';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';


import { ReservasComponent } from './reservas/reservas.component';
import { ListareservasComponent } from './listareservas/listareservas.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaleriaComponent } from './galeria/galeria.component';
import { DomsegurpPipe } from './acerca/domsegurp.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { GraficaComponent } from './grafica/grafica.component';
import { ConsultasFirestoreComponent } from './consultas-firestore/consultas-firestore.component';
import { HttpClientModule } from '@angular/common/http';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Inicio2Component } from './inicio2/inicio2.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { LecturaVozComponent } from './lectura-voz/lectura-voz.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { ServiceWorkerModule } from '@angular/service-worker';






@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ReservasComponent,
    ListareservasComponent,
    MenuComponent,
    ContactoComponent,
    AcercaComponent,
    GaleriaComponent,
    DomsegurpPipe,
    GraficaComponent,
    ConsultasFirestoreComponent,
    LoginComponent,
    RegisterComponent,
    Inicio2Component,
    VistaAdminComponent,
    LecturaVozComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    AlertModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,

    provideFunctions(() => getFunctions()),
      provideAnalytics(() => getAnalytics()),
      providePerformance(() => getPerformance()),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
