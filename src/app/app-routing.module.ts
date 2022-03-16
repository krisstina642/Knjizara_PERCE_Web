import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnjigeComponent } from './knjige/knjige.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { DogadjajComponent } from './dogadjaj/dogadjaj.component'; 
import { KnjigaComponent } from './knjiga/knjiga.component';
import { PretragaKnjigaComponent } from './pretraga-knjiga/pretraga-knjiga.component';
import { ProfilComponent } from './profil/profil.component';
import { PreporukeComponent } from './preporuke/preporuke.component';


const routes: Routes = [
  {path:'', component: PocetnaComponent},
  {path:'knjige', component: KnjigeComponent},
  {path:'dogadjaj/:id', component: DogadjajComponent},
  {path:'knjiga/:id', component: KnjigaComponent},
  {path:'pretraga/:p', component: PretragaKnjigaComponent},
  {path:'profil/:id', component: ProfilComponent},
  {path:'preporuke', component: PreporukeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  PocetnaComponent, 
  KnjigeComponent, 
  DogadjajComponent, 
  KnjigaComponent, 
  PretragaKnjigaComponent,
  ProfilComponent,
  PreporukeComponent,]
