import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterappComponent } from './twitterapp.component';

describe('TwitterappComponent', () => {
  let component: TwitterappComponent;
  let fixture: ComponentFixture<TwitterappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
