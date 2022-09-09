import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CVComponent } from './Components/cv/cv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienciaLaboralComponent } from './Components/experiencia-laboral/experiencia-laboral.component';
import { HistorialAcademicoComponent } from './Components/historial-academico/historial-academico.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ExperienciaLaboralComponent,
    HistorialAcademicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
