import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusLifeComponent } from './campus-life.component';

describe('CampusLifeComponent', () => {
  let component: CampusLifeComponent;
  let fixture: ComponentFixture<CampusLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusLifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
