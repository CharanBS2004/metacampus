import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:meta-campus/src/app/student-management/library/library.component.spec.ts
import { LibraryComponent } from './library.component';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryComponent);

import { HostelComponent } from './hostel.component';

describe('HostelComponent', () => {
  let component: HostelComponent;
  let fixture: ComponentFixture<HostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelComponent);
>>>>>>>> f70a6c16afb2d377dc0a3121c0990029bf054b7d:meta-campus/src/app/admin1/hostel/hostel.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
