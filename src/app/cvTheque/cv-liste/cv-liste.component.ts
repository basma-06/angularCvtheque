import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { Movie } from 'src/app/Model/Movie';
import { CvService } from '../cv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cv-liste',
  templateUrl: './cv-liste.component.html',
  styleUrls: ['./cv-liste.component.css']
})
export class CvListeComponent implements OnInit {
  api_url = environment.API_URL; //url du projet angular en localhost
  api_url_images = environment.API_URL_IMAGES; //les images sont recupérées sur le repertoiredu projet Laravel

//@Input = accéde à la class Personne.
@Input() personnes: Personne[]; 
//@Input = accéde à la class Movie.
@Input() movies: Movie[];

@Output() selectedPersonne = new EventEmitter(); //rend la variable accessible au pére
@Output() selectedMovie = new EventEmitter(); //rend la variable accessible au pére

constructor(
  private cvService: CvService,
  ) { 
    console.log('environnement', environment.production); // Logs false for default
  }

  ngOnInit(): void {
    /*
    * Inscription à l'Observable crée dans le service cvService
    * pour recupérer tous les films envoyé par le projet Laravel
    */
    this.cvService.getPersonnes().subscribe(
      //si on a une réponse qui est un tableau de personnes alors
      //on affecte cette reponse à this.personnes
      (movies) => {this.movies = movies;}
    ),
    (error) => {
      alert('Probleme d\'acces à l\'API, les données affichées sont facke');
      console.log(error);
      this.personnes = this.cvService.getFakePersonnes();
    }
  }

  /**
   * Appelé dans cv-list.component.html
   * Fait un emit output de selectedMovie au parent
   * @param movie de type Movie
   */
  selectMovie(movie: Movie) {
    //emettre un evenement et y injecter le film selectionné
    this.selectedMovie.emit(movie);
    console.log('selectMovie dans cv-liste.ts, fait un emit de movie', movie);
  }

}
