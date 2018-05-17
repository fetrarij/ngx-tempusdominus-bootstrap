import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  form: FormGroup;
  options: any = {format: 'DD/MM/YYYY'};

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [moment('2015-11-18T00:00Z'), Validators.required]
    });
  }

  ngOnInit() {
  }

  reset() {
    this.form.controls['date'].reset();
  }

}
