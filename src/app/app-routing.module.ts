import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './globals/home/home.component';
import { MembermanagerComponent } from './formmember/membermanager/membermanager.component';
import { NotfoundComponent } from './globals/notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', component: HomeComponent},
  {path:'members', component: MembermanagerComponent},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
