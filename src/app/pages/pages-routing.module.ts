import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LazyLoadTestComponent } from './lazy-load-test/lazy-load-test.component';

const routes: Routes = [{ path: '', component: PagesComponent },
{ path: 'lazyload', component: LazyLoadTestComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
