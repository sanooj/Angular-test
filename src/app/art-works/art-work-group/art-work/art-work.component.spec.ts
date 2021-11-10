import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lightbox, LightboxConfig, LightboxModule } from 'ngx-lightbox';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { MuseumService } from 'src/app/service/museum.service';
import { mockAlbums } from 'src/app/service/museum.service.mock';

import { ArtWorkComponent } from './art-work.component';

class ToasterStub {
  showSuccess(message: string, title: string): void {}
  showError(message: string, title: string): void {}
  showInfo(message: string, title: string): void {}
  showWarning(message: string, title: string): void {}
 }
 
describe('ArtWorkComponent', () => {
  let component: ArtWorkComponent;
  let fixture: ComponentFixture<ArtWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LightboxModule ],
      providers: [MuseumService, Lightbox, LightboxConfig, { provide: ToastrService, useClass: ToasterStub } ],
      declarations: [ ArtWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtWorkComponent);
    component = fixture.componentInstance;
    component.articleObject = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger open lightbox function', () => {
   
    component.albums.push(mockAlbums);
    expect(component.open).toBeTruthy();
    expect(component.albums).toEqual([mockAlbums]);
  });

  it('should not trigger open lightbox function', () => {
    component.albums = [];
    expect(component.open).toBeTruthy();
    expect(component.albums).toEqual([]);
  });

  it('should close function', () => {
    expect(component.close).toBeTruthy();
  });
});
