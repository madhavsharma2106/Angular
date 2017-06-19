import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssComponent } from './iss.component';
import { Location } from '../models/Location';


describe('IssComponent', () => {
  let component: IssComponent;
  let fixture: ComponentFixture<IssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
