import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  @Input() datos: any[];
  @Input() average: number;

  componentData: any[] = [];
  Students: string[] = [];
  Marks: number[] = [];
  Percent: number[] = [];
  desaprobados: number[] = [];
  constructor() { }
  i = 0;
  ngOnInit() {
    this.componentData = this.datos;
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.componentData.length; i ++ ) {
      this.Marks.push((Math.round(this.componentData[i].grades.current_score * 0.20) / this.average) * 10);
      const promedio =  ( (this.Marks.reduce( function (a, b) { return a + b; })) / this.Marks.length);

      this.Students.push(this.componentData[i].user.name);
    }

  }

// tslint:disable-next-line: member-ordering
  public chartType = 'pie';

// tslint:disable-next-line: member-ordering
  public chartDatasets: Array<any> = [
    { data: this.Marks, label: 'My First dataset' }
  ];

// tslint:disable-next-line: member-ordering
  public chartLabels: Array<any> = this.Students;

// tslint:disable-next-line: member-ordering
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        '#ff4444',
        '#ffbb33',
        '#00C851',
        '#33b5e5',
        '#2BBBAD',
        '#4285F4',
        '#aa66cc',
        '#2E2E2E',
        '#4B515D',
        '#3F729B',
        '#37474F',
      ],
      borderColor: [
        '#CC0000',
        '#FF8800',
        '#007E33',
        '#0099CC',
        '#00695c',
        '#0d47a1',
        '#9933CC',
        '#212121',
        '#3E4551',
        '#1C2331',
        '#263238'
      ],
      borderWidth: 1,
    }
  ];

// tslint:disable-next-line: member-ordering
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
