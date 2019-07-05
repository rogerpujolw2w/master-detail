import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  id: string;
  dni: string;
  nombre: string;
  user: User;

  @Input() errorDetected = false;
  @Input() recordSaved = false;

  @Output() enviarUsuario = new EventEmitter<User>();

  constructor() {
      this.id = '';
      this.dni = '';
      this.nombre = '';
      this.errorDetected = false;
      this.recordSaved = false;
   }

   saveRecord() {
     this.user = new User(this.dni, this.nombre);
     this.enviarUsuario.emit(this.user);
     this.dni = '';
     this.nombre = '';
   }

   clearNotice() {
  this.errorDetected = false;
  this.recordSaved = false;
}

  ngOnInit() {
  }

}
