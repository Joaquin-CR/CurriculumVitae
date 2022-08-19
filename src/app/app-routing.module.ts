import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CVComponent } from './Components/cv/cv.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'CV',
    pathMatch: 'full'
  },
  {
    path: 'CV',
    component: CVComponent
  },
  {
    path: '***',
    redirectTo: 'CV',
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
