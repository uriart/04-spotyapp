import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer REMPLAZAR_TOKEN_AQUÍ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });

   }

   getArtistas( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA9dtSV9S6En4PETgwFC3EyMKGsXqGERtrmZC5GIztIGrlwKpN6uWbrTlL4lkO9aG6SLDBaIWt5myX3OqI'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers });

   }

}
