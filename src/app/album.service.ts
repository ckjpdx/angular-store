import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() { // called in MarketplaceComponent. It uses our AlbumService to retrieve its data. 
    return this.albums;
  }

  getAlbumById(albumId: number){
    for (var i = 0; i < ALBUMS.length; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }
}

//Services allow us to organize and share the same code and data in many different places throughout our application. Angular has both built-in services, and allows us to create our own custom services.

//Injectors are like the vehicles that get services where they need to be. The dependency injector is responsible for passing (or "injecting") an instance of the service into the components that need it.

//Providers also do what its name suggests: It creates instances of our service, and provides them to the injector. They're like the recipe that knows how to create services.

// Automatically Retrieving Data from a Service
// So far we have
// A source of data. This could be an API, or a database in other applications, but for us it's simply a mock-albums.ts file.
// A service that imports that data, and contains a getAlbums() method to return it.
// A component that has both registered the service as a provider, and has an instance available to it (because it was included in the constructor())
