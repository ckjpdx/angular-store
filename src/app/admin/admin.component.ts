import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  submitForm(title: string, artist: string, description: string) {
    var newAlbum: Album = new Album(title, artist, description); // does not need key - that comes from Firebase
    this.albumService.addAlbum(newAlbum);
  }

  ngOnInit() {
    // The injector isn't needed to use the ngOnInit() method here in the AdminComponent quite yet, because we don't need it to interact with our Service or Firebase as soon as it's initialized. We only need to do so when the form is submitted.
  }

}
