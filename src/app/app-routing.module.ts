import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' ,redirectTo:'startFrameWork', pathMatch :'full'},
  {path:'startFrameWork' , component:HeaderComponent , title:'START FRAMEWORK'},
  {path:'About' , component:AboutComponent , title:'About'},
  {path:'Portofolio' , component:PortofolioComponent ,title:'Portofolio'},
  {path:'Contact' , component:ContactComponent , title:'Contact'},
  {path:'**' , component:NotfoundComponent , title:'Not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
