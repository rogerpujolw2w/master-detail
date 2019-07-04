import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {

  dni: string;
  nombre: string;
  user: User;

  @Input() errorDetected = false;
  @Input() recodSaved = false;

  @Output() enviarUsuario = new EventEmitter<User>();

  constructor() {
      this.dni = '';
      this.nombre = '';
      this.errorDetected = false;
      this.recodSaved = false;
   }

   saveRecord() {
     this.user = new User(this.dni,this.nombre);
     this.enviarUsuario.emit(this.user);
     this.dni = '';
     this.nombre = '';
   }

clearNotice() {
  this.errorDetected = false;
  this.recodSaved = false;
}

  ngOnInit() {
  }

}
