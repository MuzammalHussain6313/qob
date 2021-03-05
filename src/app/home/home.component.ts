import {Component, OnInit} from '@angular/core';
import {tsXLXS} from 'ts-xlsx-export';
import {DataCollectorService} from '../data-collector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened = false;
  data;
  courses: any;
  constructor(
    // public dataCollector: DataCollectorService
    ) {
    setTimeout(() => {
      this.loadCourses();
    }, 5000);
  }

  downloadData(): any {
    // const report = this.dataCollector.createReport();
    // const q1 = 3; const q2 = 2;
    // const quiz = `quiz${q1}`;
    // const object = {Name: '', email: '', quiz2: '', total: ''};
    // object[quiz] = 'dfghj';
    // console.log(object);

    // setTimeout(() => {
    //   tsXLXS().exportAsExcelFile(this.dataCollector.report).saveAsExcelFile(`${Date.now()}`);
    //   if (report) {
    //   } else {
    //     console.log('dfghjkl');
    //   }
    // }, 2000);
  }

  ngOnInit(): void {
  }

  loadCourses(): any {
    // this.courses = this.dataCollector.courses;
  }
}
