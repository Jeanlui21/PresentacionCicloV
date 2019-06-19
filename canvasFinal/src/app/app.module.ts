import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasMenuComponent } from './components/canvas-menu/canvas-menu.component';
import { CanvasHomeComponent } from './components/canvas-home/canvas-home.component';
import { CanvasTeachersComponent } from './components/canvas-teachers/canvas-teachers.component';
import { CanvasCoursesComponent } from './components/canvas-courses/canvas-courses.component';
import { CanvasChartsComponent } from './components/canvas-charts/canvas-charts.component';
import { HttpClientModule } from '@angular/common/http';
import { BarComponent } from './components/canvas-charts/bar/bar.component';
import { PieComponent } from './components/canvas-charts/pie/pie.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasMenuComponent,
    CanvasHomeComponent,
    CanvasTeachersComponent,
    CanvasCoursesComponent,
    CanvasChartsComponent,
    BarComponent,
    PieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
