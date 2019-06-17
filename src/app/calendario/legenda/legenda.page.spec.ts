import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaPage } from './legenda.page';

describe('LegendaPage', () => {
  let component: LegendaPage;
  let fixture: ComponentFixture<LegendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
