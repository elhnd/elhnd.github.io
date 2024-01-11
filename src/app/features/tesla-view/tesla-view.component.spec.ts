import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaViewComponent } from './tesla-view.component';

describe('TeslaViewComponent', () => {
  let component: TeslaViewComponent;
  let fixture: ComponentFixture<TeslaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
