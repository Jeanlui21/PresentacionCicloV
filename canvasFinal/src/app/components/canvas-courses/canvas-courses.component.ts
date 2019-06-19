import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanvasLocal } from 'src/app/services/canvaslocal.service';

@Component({
  selector: 'app-canvas-courses',
  templateUrl: './canvas-courses.component.html',
  styleUrls: ['./canvas-courses.component.scss']
})
export class CanvasCoursesComponent implements OnInit {
  lista: any;
  constructor(private router: Router, private localService: CanvasLocal) { }

  goGoto(courseId, courseName) {
    // Envio de parametros por medio de getter y setter
    this.localService.setcourseParameters(courseId, courseName);
    this.router.navigate(['graphics', courseId]);
  }

  ngOnInit() {
    this.localService.getCanvasCourses().subscribe(result => this.lista = result);
  }

}
