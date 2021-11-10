import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { MuseumService } from 'src/app/service/museum.service';
import { SwiperModule } from 'swiper/angular';

import { ArtWorkGroupComponent } from './art-work-group.component';


class ToasterStub {
  showSuccess(message: string, title: string): void {}
  showError(message: string, title: string): void {}
  showInfo(message: string, title: string): void {}
  showWarning(message: string, title: string): void {}
 }

describe('ArtWorkGroupComponent', () => {
  let component: ArtWorkGroupComponent;
  let fixture: ComponentFixture<ArtWorkGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SwiperModule],
      providers: [MuseumService, { provide: ToastrService, useClass: ToasterStub }],
      declarations: [ArtWorkGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWorkGroupComponent);
    component = fixture.componentInstance;
    component.departmentId = 1;
    component.displayName = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
