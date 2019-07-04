import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembermanagerComponent } from './membermanager/membermanager.component';
import { MemberlistComponent } from './memberlist/memberlist.component';

@NgModule({
  declarations: [MembermanagerComponent, MemberlistComponent],
  imports: [
    CommonModule
  ],
  exports: [MembermanagerComponent, MemberlistComponent]
})
export class FormmemberModule { }
