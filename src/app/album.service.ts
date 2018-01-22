import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  // getAlbumById(albumId: number) {
  //   ALBUMS.forEach(function(album) {
  //     console.log(album.id);
  //     if (album.id === albumId) {
  //       console.log(album);
  //       return album;
  //     }
  //   })
  // }
  //
  getAlbumById(albumId: number){
    for (var i = 0; i < ALBUMS.length; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
