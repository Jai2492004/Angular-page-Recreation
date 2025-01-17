import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbarComponent } from './mainbar.component';

describe('MainbarComponent', () => {
  let component: MainbarComponent;
  let fixture: ComponentFixture<MainbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
