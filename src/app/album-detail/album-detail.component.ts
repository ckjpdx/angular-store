import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // contains information about a route associated with a component loaded in an outlet. This is required for dynamic routing. Params will help us collect parameters for use when routing.
import { Location } from '@angular/common'; // normalizes address bar
import { Album } from '../album.model'; // needed
import { AlbumService } from '../album.service';
// import { FirebaseObjectObservable } from 'angularfire2/database'; // maybe don't need this? works fine without.


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string = null; // starts null
  albumToDisplay; // had to remove type Album - throws error missing "title" - type is removed in cirriculum

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => { // this must be forEach for this to work because of magic
      this.albumId = urlParameters['id'];
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId); // displays an album by looking into albumService's method getAlbumById and passes AlbumDetailComponent's albumId property as an argument.
  }

}
