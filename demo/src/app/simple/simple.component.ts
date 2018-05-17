import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  options = {format: 'YYYY/MM/DD HH:mm', buttons: {showClear: true}, icons: {clear:'fa fa-trash'}};
  date = null;
  constructor() { }
  ngOnInit() {
  }
  addTime(val, selector) {
    this.date = moment(this.date.add(val, selector));
  }
  clearTime() {
    this.date  = null;
  }
  getTime () {
    window.alert('Selected time is:' + this.date.format('YYYY/MM/DD HH:mm'));
  }
}
