import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { MuseumService } from '../service/museum.service';

import { ArtWorksComponent } from './art-works.component';

class ToasterStub {
  showSuccess(message: string, title: string): void {}
  showError(message: string, title: string): void {}
  showInfo(message: string, title: string): void {}
  showWarning(message: string, title: string): void {}
 }

describe('ArtWorksComponent', () => {
  let component: ArtWorksComponent;
  let fixture: ComponentFixture<ArtWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MuseumService,  { provide: ToastrService, useClass: ToasterStub }],
      declarations: [ArtWorksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
