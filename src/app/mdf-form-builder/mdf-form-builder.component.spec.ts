import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfFormBuilderComponent } from './mdf-form-builder.component';

describe('MdfFormBuilderComponent', () => {
  let component: MdfFormBuilderComponent;
  let fixture: ComponentFixture<MdfFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
