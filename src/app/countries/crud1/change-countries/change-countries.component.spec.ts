import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCountriesComponent } from './change-countries.component';

describe('ChangeCountriesComponent', () => {
  let component: ChangeCountriesComponent;
  let fixture: ComponentFixture<ChangeCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
