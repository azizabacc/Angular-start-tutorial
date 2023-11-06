import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
  user: { firstname: string, lastname: string, email: string, password: string } = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  submit(login:any){
    console.log('form submitted : ', login)
  }

}
