import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembermanagerComponent } from './membermanager/membermanager.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { MemberModule } from '../member/member.module';

@NgModule({
  declarations: [MembermanagerComponent, MemberlistComponent],
  imports: [
    CommonModule, MemberModule
  ],
  exports: [MembermanagerComponent, MemberlistComponent]
})
export class FormmemberModule { }
