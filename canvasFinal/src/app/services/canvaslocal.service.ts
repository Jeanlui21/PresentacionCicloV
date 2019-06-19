import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class CanvasLocal {
  courseName: string;
  courseId: number;

  constructor(private Http: HttpClient) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
     const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
// tslint:disable-next-line: max-line-length
     FileSaver.saveAs(data, fileName + '_CanvasMix' + EXCEL_EXTENSION);
  }

  getCanvasCourses() {
    // https://canvas-api-wquesada.c9users.io/api/courses/ -> AWS -> http://3.19.68.210/api/courses/ http://18.222.195.200:3000/api/courses || http://18.222.195.200:3000/api/courses/3/assignments
    const pathUrl = 'http://18.222.195.200:3000/api/courses/';
    return this.Http.get(pathUrl);
  }

  getcourseName() {
    return this.courseName;
  }

  getCourseData( courseId ) {
    return this.Http.get('http://18.222.195.200:3000/api/courses/' + courseId + '/enrollments');
  }

  getCourseAsig( courseId ) {
    return this.Http.get('http://18.222.195.200:3000/api/courses/' + courseId + '/assignments');
  }


  setcourseParameters(courseId, courseName) {
    this.courseName = courseName;
    this.courseId = courseId;
  }
}
