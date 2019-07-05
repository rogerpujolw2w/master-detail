import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemberlistComponent implements OnInit {


  @Input() usersArray: User[];
  @Input() registerUsers = 0;

  @Output() eraseUser = new EventEmitter<User>();
  @Output() verUser = new EventEmitter<User>();

  constructor() { }

  deleteUser(item: User) {
    this.eraseUser.emit(item);
  }

  ngOnInit() {
  }

}
