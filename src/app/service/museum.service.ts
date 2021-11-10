import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Departments, artWorkObjects, artWorkObjectsDetails } from '../interface/museum.interface';

/**
 * Base Api URL
 */
const baseUrl= 'https://collectionapi.metmuseum.org/public/collection/v1/';

/**
 * Museum artwork service
 */
@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  /**
   * Constructor 
   * @param httpClient : HTTP Client for GET option
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Getting Department list
   * @returns : Department name and id
   */
  getDeparments(): Observable<Departments> {
    const url =
      `${baseUrl}departments`;

    return this.httpClient.get<Departments>(url).pipe(
      map((response) => {
        return response as Departments;
      })
    );
  }
  
  /**
   * Getting object id from each department
   * @param ids : ids of department
   * @returns : Getting Object Ids and total number
   */
  getObjectIds(ids:number): Observable<artWorkObjects> {
    const url =
      `${baseUrl}objects?departmentIds=${ids}`;

    return this.httpClient.get<artWorkObjects>(url).pipe(
      map((response) => {
        return response as artWorkObjects;
      })
    );
  }
  
  /**
   * Getting art wotk details
   * @param object : number of object
   * @returns : Object ( artwork ) details
   */
  getObject(object:number): Observable<artWorkObjectsDetails> {
    const url =
      `${baseUrl}objects/${object}`;

    return this.httpClient.get<artWorkObjectsDetails>(url).pipe( 
      map((response) => {
        return response as artWorkObjectsDetails;
      })
    );
  }
}