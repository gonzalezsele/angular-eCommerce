import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(){

  }

}
