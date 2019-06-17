import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Not5Page } from './not5.page';

describe('Not5Page', () => {
  let component: Not5Page;
  let fixture: ComponentFixture<Not5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Not5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Not5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
