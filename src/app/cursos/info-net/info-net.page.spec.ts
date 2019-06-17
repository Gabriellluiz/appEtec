import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNetPage } from './info-net.page';

describe('InfoNetPage', () => {
  let component: InfoNetPage;
  let fixture: ComponentFixture<InfoNetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
