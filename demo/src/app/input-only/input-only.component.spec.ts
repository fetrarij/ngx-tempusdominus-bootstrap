import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOnlyComponent } from './input-only.component';

describe('InputOnlyComponent', () => {
  let component: InputOnlyComponent;
  let fixture: ComponentFixture<InputOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
