import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.scss']
})
export class MemberlistComponent implements OnInit {


//  @Input() usersArray: User[];
  usersArray: User[];
//  @Input() registerUsers = 0;
  registerUsers = 0;

  @Output() eraseUser = new EventEmitter<User>();
  @Output() verUser = new EventEmitter<User>();

  constructor(private servicio: ServicioService) {
    this.usersArray = servicio.usersArray;
    this.registerUsers = servicio.registreredUsers;
  }

  deleteUser(item: User) {
    this.eraseUser.emit(item);
  }

  ngOnInit() {
  }

}
