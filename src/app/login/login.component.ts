import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: 'gon@miniasp.com',
    password: '1342134',
    remember: 'ture'
  }

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';


    // setTimeout(() => {
    //   localStorage.setItem('token', '134');
    //   console.log('gogogo!');
    //   this.router.navigate(['/' + this.route.snapshot.queryParamMap.get('ret')]);
    // }, 3000);
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      console.log('submited!');
    } else {
      console.log('QQ');
    }
  }
}
