import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not3Page } from './not3.page';

describe('Not3Page', () => {
  let component: Not3Page;
  let fixture: ComponentFixture<Not3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
