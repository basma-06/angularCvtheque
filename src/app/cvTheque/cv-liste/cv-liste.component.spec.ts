import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvListeComponent } from './cv-liste.component';

describe('CvListeComponent', () => {
  let component: CvListeComponent;
  let fixture: ComponentFixture<CvListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
