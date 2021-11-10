import { HttpClient } from '@angular/common/http';
import { MuseumService } from './museum.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockArtworkObjectDetails, mockArtworkObjects, mockDepartments } from './museum.service.mock';


describe('MuseumService', () => {
  let service: MuseumService;
  let httpClient: HttpClient;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(MuseumService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    service = TestBed.inject(MuseumService);
    expect(service).toBeTruthy();
  });

  it('should return list of departments', () => {
    service.getDeparments().subscribe(
      response => expect(response).toEqual(mockDepartments),
      );
    const request = backend.expectOne(`https://collectionapi.metmuseum.org/public/collection/v1/departments`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockDepartments);
  });

  it('should return list of artwork objects', () => {
    service.getObjectIds(1).subscribe(
      response => expect(response).toEqual(mockArtworkObjects),
      );
    const request = backend.expectOne(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockArtworkObjects);
  });

  it('should return list of artwork object Details', () => {
    service.getObject(1).subscribe(
      response => expect(response).toEqual(mockArtworkObjectDetails)
      );
    const request = backend.expectOne(`https://collectionapi.metmuseum.org/public/collection/v1/objects/1`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockArtworkObjectDetails);
  });

});
