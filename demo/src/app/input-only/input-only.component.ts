import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-input-only',
  templateUrl: './input-only.component.html',
  styleUrls: ['./input-only.component.css']
})
export class InputOnlyComponent implements OnInit {

  date =  moment('2015-11-18T00:00Z');
  options: any = {format: 'DD.MM.YYYY', locale: 'fr'};
  constructor() { }

  ngOnInit() {
  }
}
