import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestColis3Component } from './post-request-colis3.component';

describe('PostRequestColis3Component', () => {
  let component: PostRequestColis3Component;
  let fixture: ComponentFixture<PostRequestColis3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestColis3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRequestColis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
