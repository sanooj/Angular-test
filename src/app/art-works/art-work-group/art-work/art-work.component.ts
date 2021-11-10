import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { Albums, artWorkObjectsDetails } from 'src/app/interface/museum.interface';
import { MuseumService } from 'src/app/service/museum.service';

/*
 * Museum department group component
 */
@Component({
  selector: 'app-art-work',
  templateUrl: './art-work.component.html',
  styleUrls: ['./art-work.component.scss']
})
export class ArtWorkComponent implements OnInit, OnDestroy {

  /**
   * Subject to cancel subscriptions when component is destroyed
   * @see ngOnDestroy
   */
  private destroyed$ = new Subject<void>();

  /**
   * Input Article Object number
   */
  @Input() articleObject: number = 0;

  /**
   * Albums array
   */
  albums: Albums[] = [];

  /**
   * Article array
   */
  article: artWorkObjectsDetails = {
    objectID: 0,
    primaryImage: '',
    primaryImageSmall: '',
    title: '',
  };

  /**
   * Album for lightbox
   */
  album: Albums = {
    src: '',
    caption: '',
    thumb: ''
  };

  /**
   * Constructor
   * @param museumService : to set the list for museum
   * @param _lightbox : to set lightbox
   * @param toastr : to set toast message
   */
  constructor(
    private museumService: MuseumService,
    private _lightbox: Lightbox,
    private toastr: ToastrService
  ) {}

  /**
   * Onint : getting Artwork details from object
   */
  ngOnInit():void {
    this.museumService
      .getObject(this.articleObject)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (res) => {
          this.article = res;
          this.album = {
            src: this.article.primaryImage,
            caption: this.article.title,
            thumb: this.article.primaryImageSmall,
          };
          this.albums.push(this.album);
        },
        error: (err) => {this.toastr.error('Error!', err);}
      });
  }

  /**
   * Lightbox open
   */
  open() {
    // Checking for alubum length to popup
    if (!!this.albums.length) {
      this._lightbox.open(this.albums, 0);
    }
  }

  /**
   * Lightbox close method
   */
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  /**
   * unsubscribe all subscriptions
   */
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
