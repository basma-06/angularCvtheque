import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { Movie } from 'src/app/Model/Movie';
import { EmbaucheService } from '../embauche.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  api_url = environment.API_URL; //url du projet angular en localhost
  api_url_laravel = environment.API_URL_LARAVEL; //url du projet laravel en localhost
  api_url_images = environment.API_URL_IMAGES; //les images sont recupérées sur le repertoiredu projet Laravel

  @Input() personne: Personne; //rend visible la variable au template (variable definie dans le template cv-container)
  @Input() movie: Movie;

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /*
  * renvoi vers Laravel pour editer le film avec son id
  * @param id
  **/
  updateMovie(id) {
    document.location.href = this.api_url_laravel + 'movies/edit/' + id;
  }

   /*
  * renvoi vers Laravel pour créer le film
  **/
  addPersonne() {
    //const token = this.tokenService.getToken();
    document.location.href = this.api_url_laravel + 'movies/create';
  }

}
