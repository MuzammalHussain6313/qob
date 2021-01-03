import {Component, OnInit} from '@angular/core';
import {tsXLXS} from 'ts-xlsx-export';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data;

  constructor() {
  }

  downloadData() {
    this.data = [
      {
        Tower: 'A',
        Flat: '101',
        Month: 'November',
        Year: '2017'
      }, {
        Tower: 'A',
        Flat: '201',
        Month: 'November',
        Year: '2017'
      }, {
        Tower: 'B',
        Flat: '301',
        Month: 'November',
        Year: '2017'
      }, {
        Tower: 'C',
        Flat: '101',
        Month: 'November',
        Year: '2017'
      }, {
        Tower: 'D',
        Flat: '401',
        Month: 'November',
        Year: '2017'
      }];
    const res = tsXLXS().exportAsExcelFile(this.data).saveAsExcelFile(`${Date.now()}`);
  }

  ngOnInit(): void {
  }

}
