import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  constructor(private router: Router){}

  albums: Album[] = [
    new Album('Hail to the Thief', 'Radiohead', 'The sixth studio album released by Radiohead in 2003.', 1),
    new Album('Misery is a Butterfly', 'Blonde Redhead', 'The sixth studio album released on 4AD records in 2004.', 2),
    new Album('Suicide Invoice', 'Hot Snakes', 'This is the second studion album relased in 2002.', 3),
    new Album('A Place I\'ll Always go', 'Palehound', 'This is her second studio album relased in 2017', 4),
    new Album("Funhouse", "The Stooges", "The second  album from the American rock band, released in 1970 by Elektra Records.", 5)
  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  }
}
