import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Department } from '../interface/museum.interface';
import { MuseumService } from '../service/museum.service';

import { ToastrService } from 'ngx-toastr';

/*
 * Museum all department component
 */
@Component({
  selector: 'app-art-works',
  templateUrl: './art-works.component.html',
  styleUrls: ['./art-works.component.scss']
})
export class ArtWorksComponent implements OnInit, OnDestroy {

   /**
     * Subject to cancel subscriptions when component is destroyed
     * @see ngOnDestroy
     */
  private destroyed$ = new Subject<void>();
  
  /**
   *  To save departments
   */
  departments: Department[] = [];

  /**
   * Constructor
   * @param museumService to set the list for museum
   * @param toastr to set the toaster
   */
  constructor(private museumService: MuseumService, private toastr: ToastrService) {}

  /**
   * Initializing : subscribed for departments
   */
  ngOnInit(): void {
    this.museumService
      .getDeparments()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res) => {this.departments = [...res.departments];},
        error: (err) => {this.toastr.error('Error!', err);},
    })
  }

  /**
   * unsubscribe all subscriptions
   */
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
