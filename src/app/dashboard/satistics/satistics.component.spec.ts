import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisticsComponent } from './satistics.component';

describe('SatisticsComponent', () => {
  let component: SatisticsComponent;
  let fixture: ComponentFixture<SatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SatisticsComponent]
    });
    fixture = TestBed.createComponent(SatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
