import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasHomeComponent } from './components/canvas-home/canvas-home.component';
import { CanvasCoursesComponent } from './components/canvas-courses/canvas-courses.component';
import { CanvasTeachersComponent } from './components/canvas-teachers/canvas-teachers.component';
import { LoginComponent } from 'src/app/components/users/login/login.component';
import { CanvasChartsComponent } from './components/canvas-charts/canvas-charts.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [


{ path: 'user/login', component: LoginComponent },
{ path: 'courses', component: CanvasCoursesComponent, canActivate: [AuthGuard] },
{ path: 'teachers', component: CanvasTeachersComponent, canActivate: [AuthGuard] },
{ path: 'graphics/:id', component: CanvasChartsComponent, canActivate: [AuthGuard]},

{ path: '**', redirectTo: 'courses', canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
