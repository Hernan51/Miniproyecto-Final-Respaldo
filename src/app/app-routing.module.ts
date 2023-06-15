import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ListareservasComponent } from './listareservas/listareservas.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'reservas', component: ReservasComponent},
  { path: 'listareservas',component: ListareservasComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'acerca',component: AcercaComponent},
  {path: 'galeria',component: GaleriaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
