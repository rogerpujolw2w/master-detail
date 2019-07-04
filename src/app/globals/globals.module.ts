import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GlobalsRoutingModule } from './globals-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, NotfoundComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    GlobalsRoutingModule
  ],
  exports: [NavbarComponent, NotfoundComponent, HomeComponent, FooterComponent]
})
export class GlobalsModule { }
