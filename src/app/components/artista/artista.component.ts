import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  url: string;
  loading: boolean = true;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtista( params['id']);
      this.loading = false;
    });

   }

  getArtista ( id: string ){
    this.spotify.getArtista( id )
          .subscribe( artista => {
            console.log(artista);
            this.artista = artista;
            this.url = artista['external_urls'].spotify;
          });
  }

}
