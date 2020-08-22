import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;
  name = '';
  tempRe: boolean;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.type = +this.route.snapshot.paramMap.get('type');
    console.log(this.type);
    this.name = this.route.snapshot.queryParamMap.get('name');

    this.route.paramMap.subscribe(map => {
      console.log('type changing to ' + map.get('type'));
    });
  }

  doNavigate(evt?: MouseEvent) {
    console.log('clikc!');

    const navigationExtras: NavigationExtras = {
      // queryParamsHandling: 'preserve',
      // preserveFragment: true,
      queryParams: {
        name: 'Gon',
        key: 123
      }
    }

    this.type++;
    this.router.navigate(['dashboard/utilities/color/' + this.type], navigationExtras);
  }
}
