import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CVComponent } from './Components/cv/cv.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'CVJoaquin',
    pathMatch: 'full'
  },
  {
    path: 'CVJoaquin',
    component: CVComponent
  },
  {
    path: '***',
    redirectTo: 'CVJoaquin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
