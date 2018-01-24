import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})


export class MarketplaceComponent implements OnInit {

  albums: FirebaseListObservable<any[]>; // albums property is defined here, waiting to receive data from AlbumService.

  constructor(private router: Router, private albumService: AlbumService) { } // needs an instance of both router and service

  ngOnInit() {
    this.albums = this.albumService.getAlbums(); // as soon as MarketplaceComponent loads it gets all the albums automatically
  }

  goToDetailPage(clickedAlbum: Album){ // gets clickedAlbum from click event on view
    this.router.navigate(['albums', clickedAlbum.$key]);
  }
}
