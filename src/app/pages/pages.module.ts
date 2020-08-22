import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LazyLoadTestComponent } from './lazy-load-test/lazy-load-test.component';


@NgModule({
  declarations: [PagesComponent, LazyLoadTestComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
