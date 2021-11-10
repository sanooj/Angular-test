import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { MuseumService } from 'src/app/service/museum.service';
import SwiperCore, { Lazy, SwiperOptions, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Lazy]);

/*
 * Museum department group component
 */
@Component({
  selector: 'app-art-work-group',
  templateUrl: './art-work-group.component.html',
  styleUrls: ['./art-work-group.component.scss'],
})
export class ArtWorkGroupComponent implements OnInit, OnDestroy {
  /**
   * Subject to cancel subscriptions when component is destroyed
   * @see ngOnDestroy
   */
  private destroyed$ = new Subject<void>();

  /**
   * Swiper Configurations
   */
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    lazy: true,
    breakpoints: {
      '450': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      '1200': {
        slidesPerView: 6,
        spaceBetween: 50,
      },
      '1500': {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      '1670': {
        slidesPerView: 8,
        spaceBetween: 10,
      },
      '1900': {
        slidesPerView: 9,
        spaceBetween: 10,
      },
    },
  };

  /**
   * Input for dispalay name
   */
  @Input() displayName = '';

  /**
   * Input for department id
   */
  @Input() departmentId = 0;

  /**
   * Array for article objects
   */
  articleObjects: number[] = [];

  /**
   * Constructor
   * @param museumService to set the list for museum
   * @param toastr to set the toaster
   */
  constructor(private museumService: MuseumService, private toastr: ToastrService) {}

   /**
   * Initializing : subscribed for department objects
   */
  ngOnInit(): void {
    this.museumService
      .getObjectIds(this.departmentId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res) => {this.articleObjects = res.objectIDs.splice(0, 10);},
        error: (err) => {this.toastr.error('Error!', err);},
      });
  }

  /**
   * unsubscribe all subscriptions
   */
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
