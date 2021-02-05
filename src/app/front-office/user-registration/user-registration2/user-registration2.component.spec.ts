import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistration2Component } from './user-registration2.component';

describe('UserRegistration2Component', () => {
  let component: UserRegistration2Component;
  let fixture: ComponentFixture<UserRegistration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
