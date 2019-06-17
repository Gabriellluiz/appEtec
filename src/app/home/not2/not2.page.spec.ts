import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not2Page } from './not2.page';

describe('Not2Page', () => {
  let component: Not2Page;
  let fixture: ComponentFixture<Not2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
