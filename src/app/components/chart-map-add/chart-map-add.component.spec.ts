import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMapAddComponent } from './chart-map-add.component';

describe('ChartMapAddComponent', () => {
  let component: ChartMapAddComponent;
  let fixture: ComponentFixture<ChartMapAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMapAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMapAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
