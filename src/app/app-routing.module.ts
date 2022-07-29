import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { EditarDatosComponent } from './componentes/editar-datos/editar-datos.component';
import { EditarEstudiosComponent } from './componentes/editar-estudios/editar-estudios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NavbarEditarComponent } from './componentes/navbar-editar/navbar-editar.component'
import { DatosPersonaComponent } from './componentes/datos-persona/datos-persona.component';
import { DatosEstudiosComponent } from './componentes/datos-estudios/datos-estudios.component';
import { GrillaCComponent } from './componentes/grilla-c/grilla-c.component';
import { DatosTrabajosComponent } from './componentes/datos-trabajos/datos-trabajos.component';
import { EditarTrabajosComponent } from './componentes/editar-trabajos/editar-trabajos.component';
import { DatosIdiomasComponent } from './componentes/datos-idiomas/datos-idiomas.component';
import { EditarIdiomasComponent } from './componentes/editar-idiomas/editar-idiomas.component';
import { DatosHobbiesComponent } from './componentes/datos-hobbies/datos-hobbies.component';
import { EditarHobbiesComponent } from './componentes/editar-hobbies/editar-hobbies.component';
import { DatosProyectosComponent } from './componentes/datos-proyectos/datos-proyectos.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'editar-datos' , component:EditarDatosComponent},
  {path:'editar-estudios' , component:EditarEstudiosComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'navbar-editar' , component:NavbarEditarComponent},
  {path:'datos-persona' , component:DatosPersonaComponent},
  {path:'datos-estudios', component:DatosEstudiosComponent},
  {path:'grilla-c' , component:GrillaCComponent},
  {path:'datos-trabajos', component:DatosTrabajosComponent},
  {path:'editar-trabajos', component:EditarTrabajosComponent},
  {path:'datos-idiomas' , component:DatosIdiomasComponent},
  {path:'editar-idiomas' , component:EditarIdiomasComponent},
  {path:'datos-hobbies' , component:DatosHobbiesComponent},
  {path:'editar-hobbies', component:EditarHobbiesComponent},
  {path:'datos-proyectos' , component:DatosProyectosComponent},
  {path:'editar-proyectos', component:EditarProyectosComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
