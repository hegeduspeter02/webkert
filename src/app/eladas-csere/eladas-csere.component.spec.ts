import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EladasCsereComponent } from './eladas-csere.component';

describe('EladasCsereComponent', () => {
  let component: EladasCsereComponent;
  let fixture: ComponentFixture<EladasCsereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EladasCsereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EladasCsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
