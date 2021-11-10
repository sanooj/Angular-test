import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWorkGroupComponent } from './art-work-group.component';

describe('ArtWorkGroupComponent', () => {
  let component: ArtWorkGroupComponent;
  let fixture: ComponentFixture<ArtWorkGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtWorkGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWorkGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
