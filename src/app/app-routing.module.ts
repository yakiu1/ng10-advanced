import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ColorComponent } from './utilities/color/color.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  {
    path: 'utilities',
    children: [
      { path: 'color', component: ColorComponent }
    ]
  },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
