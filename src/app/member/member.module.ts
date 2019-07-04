import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyformComponent } from './myform/myform.component';

@NgModule({
  declarations: [MyformComponent],
  imports: [
    CommonModule
  ],
  exports: [MyformComponent]
})
export class MemberModule { }
