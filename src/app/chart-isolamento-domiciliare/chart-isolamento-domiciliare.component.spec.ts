import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIsolamentoDomiciliareComponent } from './chart-isolamento-domiciliare.component';

describe('ChartIsolamentoDomiciliareComponent', () => {
  let component: ChartIsolamentoDomiciliareComponent;
  let fixture: ComponentFixture<ChartIsolamentoDomiciliareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartIsolamentoDomiciliareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIsolamentoDomiciliareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
