import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaModelComponent } from './tesla-model.component';

describe('TeslaModelComponent', () => {
  let component: TeslaModelComponent;
  let fixture: ComponentFixture<TeslaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
