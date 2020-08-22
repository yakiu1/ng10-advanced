import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.type = +this.route.snapshot.paramMap.get('type');
    console.log(this.type);

    this.route.paramMap.subscribe(map => {
      console.log('type changing to ' + map.get('type'));
    });
  }

}
