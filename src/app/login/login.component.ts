import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';


    setTimeout(() => {
      localStorage.setItem('token', '134');
      console.log('gogogo!');
      this.router.navigate(['/' + this.route.snapshot.queryParamMap.get('ret')]);
    }, 3000);
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

}
