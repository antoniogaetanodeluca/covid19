import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPositiviComponent } from './chart-positivi.component';

describe('ChartPositiviComponent', () => {
  let component: ChartPositiviComponent;
  let fixture: ComponentFixture<ChartPositiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPositiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPositiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
