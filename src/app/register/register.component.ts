import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = fb.group(
      {
        firstName: this.fb.control('Gon', [Validators.required]),
        lastName: this.fb.control('dfa', [Validators.maxLength(3)]),
        email: this.fb.control(''),
        password: this.fb.control(''),
        repeatPassword: this.fb.control(''),

      }
      // {
      //   firstName: ['Gon', [Validators.required]],
      //   lastName: ['123'],
      //   email: [''],
      //   password: [''],
      //   repeatPassword: [''],
      // }
    );
  }


  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }


  onSubmit() {

  }
}
