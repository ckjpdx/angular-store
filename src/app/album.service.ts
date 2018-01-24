// Automatically Retrieving Data from a Service
// API, or a database in other applications.
// A service that imports that data, and contains a getAlbums() method to return it.
// A component that has both registered the service as a provider, and has an instance available to it (because it was included in the constructor())

import { Injectable } from '@angular/core';
import { Album } from './album.model';
// import { ALBUMS } from './mock-albums'; // hardcoded albums no longer used
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums'); // Because this.albums is a FirebaseListObservable<any[]>, as declared at the top of the file, it has many of the same properties and capabilities of any other list or array. We can simply call push() on it to add our new album to the list.
  }

  getAlbums() { // called in MarketplaceComponent. It uses our AlbumService to retrieve its data.
    return this.albums;
  }

  addAlbum(newAlbum: Album) { // The submitForm() method in the AdminComponent will call this method to invoke the Service to save a new Album to Firebase.
  this.albums.push(newAlbum);
  }

  // Notice albumId is now a string, not a number. Firebase keys are strings.
  // Additionally, we're now calling this.database.object() instead of .list(). This is because we're requesting only a single object from Firebase, not an entire list.
  // We're also including albumId as an argument to the object() method. This is because we need to tell Firebase where to look for our object. Remember, each database entry is located under its key. All entries are also nested in a larger albums table. Therefore we specify "albums/" as the location. This prompts Firebase to look in our Albums list, for the Album residing under whatever key we provide this method.

  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
  }
}

//Services allow us to organize and share the same code and data in many different places throughout our application. Angular has both built-in services, and allows us to create our own custom services.
//Injectors are like the vehicles that get services where they need to be. The dependency injector is responsible for passing (or "injecting") an instance of the service into the components that need it.
//Providers also do what its name suggests: It creates instances of our service, and provides them to the injector. They're like the recipe that knows how to create services.
