import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogementComponent } from './logement/logement.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'logement',component:LogementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
