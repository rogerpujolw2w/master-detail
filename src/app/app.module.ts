import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalsModule } from './globals/globals.module';
import { FormmemberModule } from './formmember/formmember.module';
import { MemberModule } from './member/member.module';
import { ServicioService } from './services/servicio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GlobalsModule,
    FormmemberModule,
    MemberModule,
    AppRoutingModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
