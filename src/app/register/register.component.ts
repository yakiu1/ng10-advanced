import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, Form, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {


  data: any = {
    firstName: 'Gon',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group(
      {
        firstName: this.fb.control('Gon', [Validators.required]),
        lastName: this.fb.control('dfa', [Validators.maxLength(3)]),
        email: this.fb.control(''),
        pavssword: this.fb.control(''),
        repeatPassword: this.fb.control(''),

      }
      // {
      //   firstName: ['Gon', [Validators.required]],
      //   lastName: ['123'],
      //   email: [''],
      //   password: [''],
      //   repeatPassword: ['']
      // }
    );
  }


  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
    this.form.get('repeatPassword').setValidators([repeatPasswordValidator(this.form)]);
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }


  onSubmit() {
    console.log('Im going to submit');
  }
}

export function repeatPasswordValidator(f: FormGroup) {
  return (control: AbstractControl): { [key: string]: any } => {
    console.log(control.value);
    return control.value === f.get('password').value ? null : { repeatPassword: true };
  }
}

