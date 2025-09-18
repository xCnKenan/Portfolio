import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellAppComponent } from './bestell-app.component';

describe('BestellAppComponent', () => {
  let component: BestellAppComponent;
  let fixture: ComponentFixture<BestellAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestellAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestellAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
