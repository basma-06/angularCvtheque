import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../Model/Personne';
import { Movie } from '../Model/Movie';
import { environment } from 'src/environments/environment';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CvService {
  api_url = environment.API_URL;
  api_url_laravel = environment.API_URL_LARAVEL;
  api_url_images = environment.API_URL_IMAGES;

  private personnes: Personne[];

  //On va consulter l'API loopback via le service HttpClient d'Angular
  constructor(
    private http: HttpClient,
    private tokenService: HttpXsrfTokenExtractor
    ) { 
    
    //@todo datas de test à retirer plus tard
    this.personnes = [
      new Personne(1, 'charles', 'saad', 40, 'fleur.jpg', 2, 'DEVOPS'),
      new Personne(2, 'solene', 'joly', 37, 'tim_logo.png', 2, 'Assistant developper'),
    ];
  }

  /* 
  * Methode HTTP GET qui va retourner un tableau de type Movie 
  * Definition d'un Observable qui va accéder à l'API Laravel et 
  * charger les données dans le Model Movie
  * Le subscribe à cet Observavle est fait dans le cv-container.component.ts qui communique avec la vue
  * @return array de type Movie
  */
  getPersonnes(): Observable<Movie[]> {
    return this.http.get<Movie []>(this.api_url_laravel);    
  }

  /* 
  * Methode HTTP POST du service HttpClient 
  * Ajout d'une Film dans la base de données via un backend Laravel
  * @return void
  */
  addPersonne() {
    document.location.href = this.api_url_laravel + 'movies/create';
  }

  /*
  * HTTP GET du service HttpClient 
  * Methode qui va recuperer une personne via son id
  * @param id
  * @return array de type Personne
  */  
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.api_url_laravel + '/'+ id);
  }

  /* 
    * Methode HTTP PUT du service HttpClient 
    * Modification d'une personne dans la base de données via une API link
    * @param link URL de l'API
    * @param object de type Personne
    * @return Observable de type any
    */
  updatePersonne(personne: Personne) {
    return this.http.put(this.api_url_laravel, personne);
  }

  /* 
    * Methode HTTP DELETE du service HttpClient 
    * Suppression d'une personne dans la base de données via une API link
    * @param string
    * @return Observable de type any
    */
  deletePersonne(id: number) {
    return this.http.delete(this.api_url_laravel + '/${id}');
  }

  /*
    * @todos pour le test à retirer plus tard
    */
  getFakePersonnes() {
    return this.personnes;
  }




}
