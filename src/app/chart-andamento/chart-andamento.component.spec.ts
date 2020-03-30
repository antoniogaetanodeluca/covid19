import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAndamentoComponent } from './chart-andamento.component';

describe('ChartAndamentoComponent', () => {
  let component: ChartAndamentoComponent;
  let fixture: ComponentFixture<ChartAndamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAndamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
