import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { Movie } from 'src/app/Model/Movie';
import { CvService } from '../cv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent implements OnInit {
  private api_url = environment.API_URL; //url du projet laravel en local
  public api_url_images = environment.API_URL_IMAGES; //repertoire images de Laravel
  
  personnes: Personne[];
  movies: Movie[];
  movie: Movie[];

  selectedPersonne: Personne;//de type Personne
  selectedMovie: Movie;//de type Personne

  /*
  * Injection du service dans le constructor
  * L'injecteur de dependance s'occupe d'instancier ce service 
  */
  constructor(private cvService: CvService) {
    //Données affichées dans le template liste
    this.personnes = [
      new Personne(1, 'charles', 'saad', 40, 'fleur.jpg', 2, 'DEVOPS'),
      new Personne(2, 'solene', 'joly', 37, 'la-tempete-jpg', 2, 'Assistant developper'),
    ];
   }

  ngOnInit() {
    /*
    * Inscription à l'Observable crée dans le service cvService
    */
    this.cvService.getPersonnes().subscribe(
      //si on a une réponse qui est un tableau de personnes alors
      //on affecte cette reponse à this.personnes
      (movies) => {this.movies = movies;}
    ),
    (error) => {
      alert('Probleme d\'acces à l\'API loopback, les données affichées sont facke');
      console.log(error);
      this.personnes = this.cvService.getFakePersonnes();
    }
  }

  /**
   *  recupére le $event emit par le template enfant cv-list.component
   * affecte le $event objet de type Movie à selectedMovie
   * appelé dans le cv-container.component.html
   * @param movie de type Movie
   */
   selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    console.log('selectMovie dans cv-container.ts, affecte movie à selectedMovie', movie);
  }

  /*
  * renvoi vers Laravel pour editer le film par son id
  * param id
  **/
  updateMovie(id) {
    document.location.href = this.api_url + 'movies/edit/' + id;
  }
}
