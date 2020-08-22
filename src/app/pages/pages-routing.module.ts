import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LazyLoadTestComponent } from './lazy-load-test/lazy-load-test.component';

const routes: Routes = [{ path: '', component: PagesComponent },
{ path: 'lazyload', component: LazyLoadTestComponent },
{ path: 'blank2', loadChildren: () => import('./blank2/blank2.module').then(m => m.Blank2Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
